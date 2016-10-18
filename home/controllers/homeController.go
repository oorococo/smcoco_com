package controllers

import "github.com/kataras/iris"

func HomeControllers(app *iris.Framework) {
    app.Get("/api", func(c *iris.Context) {
        c.Write("api")
    })
}
