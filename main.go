package main

// import (
// 	"fmt"
// 	"net/http"

// 	log "github.com/Sirupsen/logrus"
// 	"github.com/labstack/echo"
// 	"github.com/labstack/echo/middleware"
// 	"github.com/oorococo/smcoco_com/common"
// 	"github.com/oorococo/smcoco_com/config"
// )

// func main() {
// 	hosts := make(map[string]*common.Host)
// 	// hosts = auth.Main(hosts)
// 	home := echo.New()

// 	hosts["smcocodev.com:443"] = &common.Host{home}

// 	home.GET("/api/*", func(c echo.Context) error {
// 		return c.String(http.StatusOK, "Hello, home!")
// 	})
// 	home.File("/*", "public/static/home/index.html")

// 	// hosts = home.Main(hosts)
// 	fmt.Println(hosts)
// 	e := echo.New()
// 	e.Use(middleware.AddTrailingSlash())
// 	e.Use(middleware.Gzip())
// 	e.Static("/public", "public")
// 	e.Any("/*", func(c echo.Context) (err error) {
// 		req := c.Request()
// 		res := c.Response()
// 		host := hosts[req.Host]
// 		if host == nil {
// 			err = echo.ErrNotFound
// 		} else {
// 			host.Echo.ServeHTTP(res, req)
// 		}
// 		return
// 	})
// 	log.Fatal(e.StartTLS(":"+config.Conf["port"], ".rsa/cert.pem", ".rsa/key.pem"))
// }

import (
	"fmt"
	"log"
	"net/http"
	"strings"
)

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()       //解析参数，默认是不会解析的
	fmt.Println(r.Form) //这些信息是输出到服务器端的打印信息
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprintf(w, "Hello astaxie!") //这个写入到w的是输出到客户端的
}

func main() {
	http.HandleFunc("/", sayhelloName)       //设置访问的路由
	err := http.ListenAndServe(":9090", nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
