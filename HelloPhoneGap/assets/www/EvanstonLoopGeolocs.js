//Evanston Loop time table and geolocations for Sunday through Wednesday
//There are two Noyes/Sherman bus stop but they are different!!!
var stop1 = new stop("Library/Norris","42.053196","-87.673414",["06:00:00 PM","06:35:00 PM","07:10:00 PM","07:45:00 PM","08:20:00 PM","09:25:00 PM","10:00:00 PM","10:35:00 PM","11:10:00 PM","11:45:00 PM","12:20:00 AM","12:55:00 AM","01:30:00 AM","02:05:00 AM","02:40:00 AM"]);
var stop2 = new stop("Fisk Hall","42.050655","-87.673677",["06:01:00 PM","06:36:00 PM","07:11:00 PM","07:46:00 PM","08:21:00 PM","09:26:00 PM","10:01:00 PM","10:36:00 PM","11:11:00 PM","11:46:00 PM","12:21:00 AM","12:56:00 AM","01:31:00 AM","02:06:00 AM","02:41:00 AM"]);
var stop3 = new stop("Weber Arch","42.05136","-87.677156",["06:03:00 PM","06:38:00 PM","07:13:00 PM","07:48:00 PM","08:23:00 PM","09:28:00 PM","10:03:00 PM","10:38:00 PM","11:13:00 PM","11:48:00 PM","12:23:00 AM","12:58:00 AM","01:33:00 AM","02:08:00 AM","02:43:00 AM"]);
var stop4 = new stop("Jacobs Center","42.054047","-87.677092",["06:04:00 PM","06:39:00 PM","07:14:00 PM","07:49:00 PM","08:24:00 PM","09:29:00 PM","10:04:00 PM","10:39:00 PM","11:14:00 PM","11:49:00 PM","12:24:00 AM","12:59:00 AM","01:34:00 AM","02:09:00 AM","02:44:00 AM"]);
var stop5 = new stop("Tech Institute","42.057944","-87.677105",["06:05:00 PM","06:40:00 PM","07:15:00 PM","07:50:00 PM","08:25:00 PM","09:30:00 PM","10:05:00 PM","10:40:00 PM","11:15:00 PM","11:50:00 PM","12:25:00 AM","01:00:00 AM","01:35:00 AM","02:10:00 AM","02:45:00 AM"]);
var stop6 = new stop("Noyes/Sherman","42.058494","-87.681445",["06:07:00 PM","06:42:00 PM","07:17:00 PM","07:52:00 PM","08:27:00 PM","09:32:00 PM","10:07:00 PM","10:42:00 PM","11:17:00 PM","11:52:00 PM","12:27:00 AM","01:02:00 AM","01:37:00 AM","02:12:00 AM","02:47:00 AM"]);
var stop7 = new stop("Sherman/Simpson","42.055849","-87.681735",["06:09:00 PM","06:44:00 PM","07:19:00 PM","07:54:00 PM","08:29:00 PM","09:34:00 PM","10:09:00 PM","10:44:00 PM","11:19:00 PM","11:54:00 PM","12:29:00 AM","01:04:00 AM","01:39:00 AM","02:14:00 AM","02:49:00 AM"]);
var stop8 = new stop("Sherman/Emerson","42.052193","-87.681842",["06:10:00 PM","06:45:00 PM","07:20:00 PM","07:55:00 PM","08:30:00 PM","09:35:00 PM","10:10:00 PM","10:45:00 PM","11:20:00 PM","11:55:00 PM","12:30:00 AM","01:05:00 AM","01:40:00 AM","02:15:00 AM","02:50:00 AM"]);
var stop9 = new stop("Sherman/Clark","42.050089","-87.681949",["06:12:00 PM","06:47:00 PM","07:22:00 PM","07:57:00 PM","08:32:00 PM","09:37:00 PM","10:12:00 PM","10:47:00 PM","11:22:00 PM","11:57:00 PM","12:32:00 AM","01:07:00 AM","01:42:00 AM","02:17:00 AM","02:52:00 AM"]);
var stop10 = new stop("Davis/Sherman","42.046998","-87.682314",["06:15:00 PM","06:50:00 PM","07:25:00 PM","08:00:00 PM","08:35:00 PM","09:40:00 PM","10:15:00 PM","10:50:00 PM","11:25:00 PM","12:00:01 AM","12:35:00 AM","01:10:00 AM","01:45:00 AM","02:20:00 AM","02:55:00 AM"]);
var stop11 = new stop("Davis/Oak","42.047114","-87.68674",["06:17:00 PM","06:52:00 PM","07:27:00 PM","08:02:00 PM","08:37:00 PM","09:42:00 PM","10:17:00 PM","10:52:00 PM","11:27:00 PM","12:02:00 AM","12:37:00 AM","01:12:00 AM","01:47:00 AM","02:22:00 AM","02:57:00 AM"]);
var stop12 = new stop("Maple/Clark","42.050117","-87.684733",["06:19:00 PM","06:54:00 PM","07:29:00 PM","08:04:00 PM","08:39:00 PM","09:44:00 PM","10:19:00 PM","10:54:00 PM","11:29:00 PM","12:04:00 AM","12:39:00 AM","01:14:00 AM","01:49:00 AM","02:24:00 AM","02:59:00 AM"]);
var stop13 = new stop("Emerson/Maple (westbound)","42.052169","-87.684873",["06:20:00 PM","06:55:00 PM","07:30:00 PM","08:05:00 PM","08:40:00 PM","09:45:00 PM","10:20:00 PM","10:55:00 PM","11:30:00 PM","12:05:00 AM","12:40:00 AM","01:15:00 AM","01:50:00 AM","02:25:00 AM","03:00:00 AM"]);
var stop14 = new stop("Ridge/Garnett","42.053268","-87.687533",["06:22:00 PM","06:57:00 PM","07:32:00 PM","08:07:00 PM","08:42:00 PM","09:47:00 PM","10:22:00 PM","10:57:00 PM","11:32:00 PM","12:07:00 AM","12:42:00 AM","01:17:00 AM","01:52:00 AM","02:27:00 AM","03:02:00 AM"]);
var stop15 = new stop("Ridge/Noyes","42.058374","-87.685817",["06:23:00 PM","06:58:00 PM","07:33:00 PM","08:08:00 PM","08:43:00 PM","09:48:00 PM","10:23:00 PM","10:58:00 PM","11:33:00 PM","12:08:00 AM","12:43:00 AM","01:18:00 AM","01:53:00 AM","02:28:00 AM","03:03:00 AM"]);
var stop16 = new stop("Noyes/Sherman","42.058398","-87.681692",["06:24:00 PM","06:59:00 PM","07:34:00 PM","08:09:00 PM","08:44:00 PM","09:49:00 PM","10:24:00 PM","10:59:00 PM","11:34:00 PM","12:09:00 AM","12:44:00 AM","01:19:00 AM","01:54:00 AM","02:29:00 AM","03:04:00 AM"]);
var stop17 = new stop("Sheridan/Noyes","42.058183","-87.677293",["06:25:00 PM","07:00:00 PM","07:35:00 PM","08:10:00 PM","08:45:00 PM","09:50:00 PM","10:25:00 PM","11:00:00 PM","11:35:00 PM","12:10:00 AM","12:45:00 AM","01:20:00 AM","01:55:00 AM","02:30:00 AM","03:05:00 AM"]);
var stop18 = new stop("Campus Dr/Annenberg","42.055483","-87.674181",["06:28:00 PM","07:03:00 PM","07:38:00 PM","08:13:00 PM","08:48:00 PM","09:53:00 PM","10:28:00 PM","11:03:00 PM","11:38:00 PM","12:13:00 AM","12:48:00 AM","01:23:00 AM","01:58:00 AM","02:33:00 AM","03:08:00 AM"]);



