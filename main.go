package main

import (
    "github.com/kataras/iris"
)

func main() {
    api := iris.New()

    admin := api.Party("admin.")
    {
        admin.Get("/", func(c *iris.Context) {
            c.Write("INDEX FROM admin.mydomain.com")
        })

        admin.Get("/hey", func(c *iris.Context) {
            c.Write("HEY FROM admin.mydomain.com/hey")
        })

        admin.Get("/hey2", func(c *iris.Context) {
            c.Write("HEY SECOND FROM admin.mydomain.com/hey")
        })
    }

    api.Get("/", func(c *iris.Context) {
        c.Write("INDEX FROM no-subdomain hey")
    })

    api.Get("/hey", func(c *iris.Context) {
        c.Write("HEY FROM no-subdomain hey")
    })

    api.Listen("smcocodev.com:8080")
}
