package main

import (
	"fmt"
	"net/http"

	log "github.com/Sirupsen/logrus"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/oorococo/smcoco_com/common"
	"github.com/oorococo/smcoco_com/config"
)

func main() {
	hosts := make(map[string]*common.Host)
	// hosts = auth.Main(hosts)
	home := echo.New()

	hosts["smcocodev.com:443"] = &common.Host{home}

	home.GET("/api/*", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, home!")
	})
	home.File("/*", "public/static/home/index.html")

	// hosts = home.Main(hosts)
	fmt.Println(hosts)
	e := echo.New()
	e.Use(middleware.AddTrailingSlash())
	e.Use(middleware.Gzip())
	e.Static("/public", "public")
	e.Any("/*", func(c echo.Context) (err error) {
		req := c.Request()
		res := c.Response()
		host := hosts[req.Host]
		if host == nil {
			err = echo.ErrNotFound
		} else {
			host.Echo.ServeHTTP(res, req)
		}
		return
	})
	log.Fatal(e.StartTLS(":"+config.Conf["port"], ".rsa/cert.pem", ".rsa/key.pem"))
}
