package main

import (
	log "github.com/Sirupsen/logrus"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/oorococo/smcoco_com/auth"
	"github.com/oorococo/smcoco_com/common"
	"github.com/oorococo/smcoco_com/config"
	"github.com/oorococo/smcoco_com/home"
)

func main() {
	hosts := make(map[string]*common.Host)
	hosts = auth.Main(hosts)
	hosts = home.Main(hosts)
	e := echo.New()
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
