<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">
    <title>1603校级及以上获奖情况统计</title>
    <!-- Bootstrap -->
    <link href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css"/>
    <link href="http://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
</body>
<?php
$num =(count($_POST)-2)/5;
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "class1603";

// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);

// 检测连接
if ($conn->connect_error) {
    die("连接失败:<hr/>" . $conn->connect_error);
}else {
    echo "数据库连接成功<hr/>";
    $conn->query("set names 'utf8'");
    $conn->query("set character_set_server = utf8;");
}
function makesql($int){
    $insert = "INSERT INTO compes values
    (0,'1603','{$_POST["name"]}',
    '{$_POST["number"]}',
    '{$_POST["compeName".(string)$int]}',
    '{$_POST["compeAward".(string)$int]}',
    '{$_POST["compeLevel".(string)$int]}',
    '{$_POST["compeOrg".(string)$int]}',
    '{$_POST["compeTeacher".(string)$int]}')";
    return $insert;
}
for($i=0; $i<$num; $i++){
    $sql=makesql($i);
    echo $sql;
    if ($conn->query($sql) === TRUE) {
        echo "<hr/>新记录插入成功<hr/>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
</body>