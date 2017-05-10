<?php
  // Decipher page section and make necessary adjustments
  
  $colors = array("91c1db", "c390d4", "d4a190", "a1d490", "9690d4");  
  $activeNav = "activeNav" . $pageSection;
  
  
  $sectionColor = $colors[$pageSection - 1];

?>
<!DOCTYPE html>
<html lang="en">
  <head>
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
	  (adsbygoogle = window.adsbygoogle || []).push({
	    google_ad_client: "ca-pub-4847870473528132",
	    enable_page_level_ads: true
	  });
	</script>	  	
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="author" content="">
    <link rel="icon" href="/images/favicon.png">

	<title>Pragides Golf :: <?php echo $pageTitle; ?></title>
	<meta name="keywords" content="<?php echo $pageKeywords; ?>"/>
	<meta name="description" content="<?php echo $pageDescription; ?>"/>

	<!-- Custom additional CSS -->
	<link href="/dist/css/custom.css" rel="stylesheet">
    <!-- Bootstrap core CSS -->
    <link href="/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="/examples/jubotron/jumbotron.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <nav class="navbar navbar-fixed-top" style="border-bottom: 4px solid #<?php echo $sectionColor;?> !important;">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/index.php">Pragides Golf</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
        	<div class="navContainer">
			<div class="mainNavigationLink nav1 <?php if ($pageSection == 1) {echo $activeNav;} ?>"><a href="/index.php">Home</a></div>
			<div class="mainNavigationLink nav2 <?php if ($pageSection == 2) {echo $activeNav;} ?>"><a href="/news.php">News</a></div>
			<div class="mainNavigationLink nav3 <?php if ($pageSection == 3) {echo $activeNav;} ?>"><a href="/golf.php">Golf</a></div>
			<div class="mainNavigationLink nav4 <?php if ($pageSection == 4) {echo $activeNav;} ?>"><a href="/articles">Articles</a></div>
			<div class="mainNavigationLink nav5 <?php if ($pageSection == 5) {echo $activeNav;} ?>"><a href="/reviews">Reviews</a></div>
			<div style="margin-right: 10px;">&nbsp;</div>
			<div style="clear: both;"></div>        	
			</div>
        </div><!--/.navbar-collapse --> 
      </div>
    </nav>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
      	<div class="paddingContainer">