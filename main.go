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
  c.JSON(200,gin.H{"title": "Response 1", "payload": "Monica"})
}

func handleReq2(c *gin.Context) {
  pp := JSONStruct{Name: "Chandler", Title: "Bing"}
  c.JSON(200, gin.H{"title": "Response #2", "payload":pp})
}

func main() {
    fmt.Println("Initializing server...")

    router := gin.Default()
    router.Use(static.Serve("/",static.LocalFile("./build", true)))

    router.GET("/req", handleReq)
    router.GET("/req2", handleReq2)

    router.Run(":8099")

}
