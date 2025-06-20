<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="The Sales Machine - Scoreboard">
        <meta name="keywords" content="admin,dashboard">
        <meta name="author" content="">
        <!-- The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags -->

        <!-- Title -->
        <title>The Sales Machine</title>

        <!-- Styles -->
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link href="<?=plugins?>bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="<?=plugins?>bootstrap-datepicker/css/datepicker.css" rel="stylesheet">
        <link href="<?=plugins?>font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="<?=plugins?>icomoon/style.css" rel="stylesheet">
        <link href="<?=plugins?>uniform/css/default.css" rel="stylesheet"/>
        <!--link href="assets/plugins/switchery/switchery.min.css" rel="stylesheet"/>
        <link href="assets/plugins/nvd3/nv.d3.min.css" rel="stylesheet"-->

        <!-- Theme Styles -->
        <link href="<?=CSSPATH?>style.css" rel="stylesheet">
        <link href="<?=CSSPATH?>custom.css" rel="stylesheet">

        <script src="<?=plugins?>chartjs/chart.min.js"></script>
</head>

<body>
	<div id="loader_wrpper">
		<div class="loader_style"></div>
	</div>

	<div class="wrapper">
		<!-- Content_right -->
		<div class="container_full">
			<div class="content_wrapper">
				<div class="container-fluid">
                    <div class="chatbox-holder collapse" id="chatbox">
                        <div class="chatbox-header">
                            <form class="input-position">
                                <input type="search"  class="form-control" placeholder="Type your question here">
                            </form>
                        </div>
                        <div class="chatbox-body">
                            <div class="panel panel-default">
                              <div class="panel-header">
                                <a data-toggle="collapse" data-target="#answer1"><div class="panel-heading">How to Add User?</div></a>
                            </div>

                              <div class="panel-body collapse" id="answer1">
                                Make sure that the setup is complete eg. location, group,  departments, roles, division and teams. To add user follow this steps.
                                  <ol>
                                    <li>Click admin in navigation bar.</li>
                                      <li>Click create user and fill up all the required fields. </li>
                                  </ol>
                                  <a href="#">Add User Now</a>
                              </div>
                            </div>
                            <div class="panel panel-default">
                              <div class="panel-header">
                                <a data-toggle="collapse" data-target="#answer2"><div class="panel-heading">How to Add Points?</div></a>
                                </div>
                              <div class="panel-body collapse" id="answer2">
                                Make sure that the setup is complete eg. location, group,  departments, roles, division and teams. To add user follow this steps.
                                  <ol>
                                    <li>Click admin in navigation bar.</li>
                                      <li>Click create user and fill up all the required fields. </li>
                                  </ol>
                                  <a href="#">Add Points Now</a>
                              </div>
                            </div>
                        </div>
                        <div class="chatbox-footer">
                            <div class="button-position tac">
                                <button class="bnt btn-default btn-sm">Chat with Support</button>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary chat-button" data-toggle="collapse" data-target="#chatbox"><i class="fa fa-comments-o"></i> Help and Support</button>
                </div>
            </div>
		</div>
		<!-- Content_right_End -->
	</div>

    <!-- Javascripts -->
        <script src="<?=plugins?>jquery/jquery-3.1.0.min.js"></script>
        <script src="<?=plugins?>bootstrap/js/bootstrap.min.js"></script>
        <script src="<?=plugins?>bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
        <script src="<?=plugins?>jquery-slimscroll/jquery.slimscroll.min.js"></script>
        <script src="<?=plugins?>uniform/js/jquery.uniform.standalone.js"></script>
        <script src="<?=plugins?>switchery/switchery.min.js"></script>
        <script src="<?=plugins?>d3/d3.min.js"></script>
        <script src="<?=plugins?>nvd3/nv.d3.min.js"></script>
        <script src="<?=plugins?>flot/jquery.flot.min.js"></script>
        <script src="<?=plugins?>flot/jquery.flot.time.min.js"></script>
        <script src="<?=plugins?>flot/jquery.flot.symbol.min.js"></script>
        <script src="<?=plugins?>flot/jquery.flot.resize.min.js"></script>
        <script src="<?=plugins?>flot/jquery.flot.tooltip.min.js"></script>
        <script src="<?=plugins?>flot/jquery.flot.pie.min.js"></script>

        <script src="<?=JSPATH?>jsfile.js"></script>
        <script src="assets/js/pages/dashboard.js"></script>

</body>

</html>
