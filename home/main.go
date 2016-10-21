package main

import (
  "github.com/kataras/iris"
  "github.com/oorococo/smcoco_com/home/controllers"
)

func main() {

  app := iris.New()

  app.Static("/assets", "./webapp/public/assets", 1)

  controllers.Controllers(app)

  app.Listen("localhost:8080")
}
