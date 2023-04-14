---
title: "ConvertAny"
excerpt: "ConvertAny: A Serverless File Converter Tool Built on AWS Lambda and S3 <br/>"
collection: portfolio
---

ConvertAny is a free online file converter tool that can convert any input file format to other formats that LibreOffice supports.

How this works!
Rest API Creation using aws lambda and API gateway
Rest api is created with the help of amazon API gateway to process the file. API gateway is integrated aws lambda function. This lambda handler written in python to process the api requested file to process. Processed file stored s3 and this file will be publically visible for 3600seconds.

Static website hosting using s3
Created static website using bulma CSS framework.

This is a serverless apploication completely built on AWS Lambda and S3. This tool was inspired by the serverless-libreoffice project by @vladgolubev.

[Click to visit](convertany.justprint.io)

"ConvertAny: A Serverless File Converter Tool Built on AWS Lambda and S3 <br/><img src='/images/convertany1.PNG'>"
