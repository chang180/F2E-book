(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{414:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("MongoDB 的安裝以及增改刪查語法"),a("br")]),t._v(" "),a("h2",{attrs:{id:"安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝"}},[t._v("#")]),t._v(" 安裝")]),t._v(" "),a("h3",{attrs:{id:"安裝版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝版"}},[t._v("#")]),t._v(" 安裝版")]),t._v(" "),a("ul",[a("li",[t._v("下載 "),a("code",[t._v(".msi")])]),t._v(" "),a("li",[t._v("選 "),a("code",[t._v("Complete")]),t._v("，"),a("code",[t._v("Install MongoD as a Service")]),t._v("，"),a("code",[t._v("Run service as a Network Service user")])]),t._v(" "),a("li",[t._v("設定檔會在 "),a("code",[t._v("安裝目錄/bin/mongo.cfg")])]),t._v(" "),a("li",[t._v("設定環境變數 "),a("code",[t._v("path")]),t._v("，新增值 "),a("code",[t._v("C:\\Program Files\\MongoDB\\Server\\4.2\\bin")])]),t._v(" "),a("li",[t._v("MongoDB 會開機啟動，打開 cmd 輸入 "),a("code",[t._v("mongo")]),t._v(" 就能進入終端機下資料庫指令")])]),t._v(" "),a("h3",{attrs:{id:"免安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免安裝"}},[t._v("#")]),t._v(" 免安裝")]),t._v(" "),a("ul",[a("li",[t._v("下載 "),a("code",[t._v(".zip")]),t._v(" 解壓縮")]),t._v(" "),a("li",[t._v("在根目錄建立 "),a("code",[t._v("mongod.config")]),t._v(" 設定檔"),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dbpath=資料儲存路徑\nlogpath=記錄檔路徑\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[t._v("建立 "),a("code",[t._v("data")]),t._v(" 和 "),a("code",[t._v("log")]),t._v(" 資料夾")]),t._v(" "),a("li",[t._v("建立 MongoDB 啟動檔 "),a("code",[t._v("start.bat")]),t._v("，寫入"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /d path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongod --config path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("moongo.config\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[t._v("使用時須先執行啟動檔後， cd 到 bin 資料夾內，下 "),a("code",[t._v("mongo")]),t._v(" 指令進入終端機下資料庫指令")])]),t._v(" "),a("h3",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.mongodb.com/products/compass",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Compass"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"使用語法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用語法"}},[t._v("#")]),t._v(" 使用語法")]),t._v(" "),a("h3",{attrs:{id:"查詢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查詢"}},[t._v("#")]),t._v(" 查詢")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("show dbs")]),t._v(" 顯示所有資料庫")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("use db")]),t._v(" 進入某資料庫")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("db.collection.find().limit().skip().pretty().sort()")]),t._v(" 查詢")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("collection")]),t._v(" 為資料表名稱")]),t._v(" "),a("li",[a("code",[t._v(".find(query, projection)")]),t._v("，"),a("code",[t._v("query")]),t._v(" 為查詢 "),a("code",[t._v("projection")]),t._v(" 顯示欄位"),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// db.products.find( query, projection )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找出 _id 為 123 的資料，但只顯示 _id, name, price 三個欄位")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ac3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("code",[t._v(".limit()")]),t._v(" 為資料比數，可不加")]),t._v(" "),a("li",[a("code",[t._v(".skip()")]),t._v(" 為略過幾筆資料，可不加")]),t._v(" "),a("li",[a("code",[t._v(".pretty()")]),t._v(" 為是否格式化輸出，可不加")]),t._v(" "),a("li",[a("code",[t._v(".sort( { price : 1 } )")]),t._v(" 為資料排序")])])]),t._v(" "),a("li",[a("p",[t._v("查詢動作")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$gte")]),t._v(" - 大於等於 "),a("code",[t._v(".find( { price: {$gte:200 } } )")])]),t._v(" "),a("li",[a("code",[t._v("$gt")]),t._v(" - 大於 "),a("code",[t._v(".find( { price: {$gt:200 } } )")])]),t._v(" "),a("li",[a("code",[t._v("$lte")]),t._v(" - 小於等於 "),a("code",[t._v(".find( { price: {$lte:200 } } )")])]),t._v(" "),a("li",[a("code",[t._v("$lt")]),t._v(" - 小於 "),a("code",[t._v(".find( { price: {$lt:200 } } )")])]),t._v(" "),a("li",[a("code",[t._v("$in")]),t._v(" - 包含 "),a("code",[t._v('.find( { type: {$in:["food"]} } )')])]),t._v(" "),a("li",[a("code",[t._v("$min")]),t._v(" - 不包含 "),a("code",[t._v('.find( { type: {$nin:["food"]} } )')])]),t._v(" "),a("li",[a("code",[t._v("$or")]),t._v(" - 或 "),a("code",[t._v('.find( { $or: [ { price: { $lt: 200 } }, { name: "ABCD"} ] } )')])]),t._v(" "),a("li",[a("code",[t._v("$not")]),t._v(" - 否 "),a("code",[t._v(".find( { price: { $not: { $gt: 200 } } } )")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Cursor")]),t._v(" 可以修改輸出的資料")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"新增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[t._v("#")]),t._v(" 新增")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" insert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" insert\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"acknowledged"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insertedIds"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ObjectId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ObjectId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123457"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// db.collection.update(query, update, {upsert, multi})")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MongoDB ABCD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MongoDB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("multi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("query")]),t._v(" - 查詢條件")]),t._v(" "),a("li",[a("code",[t._v("update")]),t._v(" - 更新資料，"),a("code",[t._v("$set")]),t._v(" 修改指定值，"),a("code",[t._v("$inc")]),t._v(" 為加減值，"),a("code",[t._v("$mul")]),t._v(" 為乘值")]),t._v(" "),a("li",[a("code",[t._v("upsert")]),t._v(" - 如果找不到資料就新增")]),t._v(" "),a("li",[a("code",[t._v("multi")]),t._v(" - 預設只找一筆資料，設定 "),a("code",[t._v("true")]),t._v(" 取代多筆資料")])]),t._v(" "),a("h3",{attrs:{id:"刪除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刪除"}},[t._v("#")]),t._v(" 刪除")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刪除一筆")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ABC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刪除多筆")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteMany")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ABC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"資料匯出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#資料匯出"}},[t._v("#")]),t._v(" 資料匯出")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongoexport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d DatabaseName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c CollectionName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"資料匯入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#資料匯入"}},[t._v("#")]),t._v(" 資料匯入")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mongoimport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d DatabaseName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c CollectionName fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);