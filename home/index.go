package home

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/oorococo/smcoco_com/common"
	"github.com/oorococo/smcoco_com/config"
)

// Main func
func Main(hosts map[string]*common.Host) map[string]*common.Host {
	e := echo.New()
	hosts[config.Conf["host"]+":"+config.Conf["port"]] = &common.Host{e}

	e.GET("/api/*", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, home!")
	})
	e.File("/*", "public/static/home/index.html")
	return hosts
}
