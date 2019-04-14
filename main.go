package main

import (
    "fmt"
    // "log"
    "github.com/gin-gonic/contrib/static"
    "github.com/gin-gonic/gin"
)

type JSONStruct struct{
  Title string  `json:title`
  Name string   `json:name`
}

// REST Requests
func handleReq(c *gin.Context) {
  c.JSON(200,gin.H{"title": "reekris", "payload": "asdfa"})
}

func handleReq2(c *gin.Context) {
  pp := JSONStruct{Name: "ad", Title: "fdsajfd"}
  c.JSON(200, gin.H{"title": "Skreenis", "payload":pp})
}

func main() {
    fmt.Println("Initializing server...")

    router := gin.Default()
    router.Use(static.Serve("/",static.LocalFile("./build", true)))

    router.GET("/req", handleReq)
    router.GET("/req2", handleReq2)

    router.Run(":8099")

}
