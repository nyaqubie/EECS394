var stop1 = new stop("Weber Arch","42.05136","-87.677156",["12:23:00 AM","12:58:00 AM","01:33:00 AM","02:08:00 AM","02:43:00 AM","06:03:00 PM","06:38:00 PM","07:13:00 PM","07:48:00 PM","08:23:00 PM","09:28:00 PM","10:03:00 PM","10:38:00 PM","11:13:00 PM","11:48:00 PM"]);
var stop2 = new stop("Jacobs Center","42.054047","-87.677092",["12:24:00 AM","12:59:00 AM","01:34:00 AM","02:09:00 AM","02:44:00 AM","06:04:00 PM","06:39:00 PM","07:14:00 PM","07:49:00 PM","08:24:00 PM","09:29:00 PM","10:04:00 PM","10:39:00 PM","11:14:00 PM","11:49:00 PM"]);
var stop3 = new stop("Tech Institute","42.057944","-87.677105",["12:25:00 AM","01:00:00 AM","01:35:00 AM","02:10:00 AM","02:45:00 AM","06:05:00 PM","06:40:00 PM","07:15:00 PM","07:50:00 PM","08:25:00 PM","09:30:00 PM","10:05:00 PM","10:40:00 PM","11:15:00 PM","11:50:00 PM"]);
var stop4 = new stop("Sheridan/Noyes","42.058183","-87.677293",["12:10:00 AM","12:45:00 AM","01:20:00 AM","01:55:00 AM","02:30:00 AM","03:05:00 AM","06:25:00 PM","07:00:00 PM","07:35:00 PM","08:10:00 PM","08:45:00 PM","09:50:00 PM","10:25:00 PM","11:00:00 PM","11:35:00 PM"]);
var elstops = [stop1,stop2,stop3,stop4];

var stop5 = new stop("Weber Arch","1","1",["8:56:00 PM","9:16:00 PM","9:36:00 PM","9:56:00 PM","10:16:00 PM","10:36:00 PM","10:56:00 PM","11:16:00 PM","11:36:00 PM","11:56:00 PM","12:16:00 AM","12:36:00 AM","12:56:00 AM","1:16:00 AM","1:36:00 AM","1:56:00 AM","2:16:00 AM","2:36:00 AM"]);
var stop6 = new stop("Jacobs Center","1","1",["8:57:00 PM","9:17:00 PM","9:37:00 PM","9:57:00 PM","10:17:00 PM","10:37:00 PM","10:57:00 PM","11:17:00 PM","11:37:00 PM","11:57:00 PM","12:17:00 AM","12:37:00 AM","12:57:00 AM","1:17:00 AM","1:37:00 AM","1:57:00 AM","2:17:00 AM","2:37:00 AM"]);
var stop7 = new stop("Tech Institute","1","1",["8:58:00 PM","9:18:00 PM","9:38:00 PM","9:58:00 PM","10:18:00 PM","10:38:00 PM","10:58:00 PM","11:18:00 PM","11:38:00 PM","11:58:00 PM","12:18:00 AM","12:38:00 AM","12:58:00 AM","1:18:00 AM","1:38:00 AM","1:58:00 AM","2:18:00 AM","2:38:00 AM"]);
var stop8 = new stop("Patten Gym","1","1",["9:00:00 PM","9:20:00 PM","9:40:00 PM","10:00:00 PM","10:20:00 PM","10:40:00 PM","11:00:00 PM","11:20:00 PM","11:40:00 PM","12:00:00 AM","12:20:00 AM","12:40:00 AM","1:00:00 AM","1:20:00 AM","1:40:00 AM","2:00:00 AM","2:20:00 AM","2:40:00 AM"]);
var clstops = [stop5,stop6,stop7,stop8];

var stop9 = new stop("Sheridan/Noyes","1","1",["6:59:00 AM","7:14:00 AM","7:24:00 AM","7:49:00 AM","8:24:00 AM","9:19:00 AM","9:39:00 AM","10:09:00 AM","10:34:00 AM","11:14:00 AM","11:54:00 AM","12:19:00 PM","12:59:00 PM","1:44:00 PM","2:04:00 PM","2:44:00 PM","3:09:00 PM","3:29:00 PM","3:49:00 PM","4:14:00 PM","4:39:00 PM","5:09:00 PM","5:24:00 PM","5:29:00 PM","5:49:00 PM","6:09:00 PM","6:29:00 PM","7:26:00 PM","8:30:00 PM","9:44:00 PM"]);
var stop10 = new stop("Sheridan/Foster","1","1",["7:01:00 AM","7:16:00 AM","7:26:00 AM","7:51:00 AM","8:26:00 AM","9:21:00 AM","9:41:00 AM","10:11:00 AM","10:36:00 AM","11:16:00 AM","11:56:00 AM","12:21:00 PM","1:01:00 PM","1:46:00 PM","2:06:00 PM","2:46:00 PM","3:11:00 PM","3:31:00 PM","3:51:00 PM","4:16:00 PM","4:41:00 PM","5:11:00 PM","5:26:00 PM","5:31:00 PM","5:51:00 PM","6:11:00 PM","6:31:00 PM","7:28:00 PM","8:32:00 PM","9:46:00 PM"]);
var stop11 = new stop("Chicago/Sheridan","1","1",["7:03:00 AM","7:18:00 AM","7:28:00 AM","7:53:00 AM","8:28:00 AM","9:23:00 AM","9:43:00 AM","10:13:00 AM","10:38:00 AM","11:18:00 AM","11:58:00 AM","12:23:00 PM","1:03:00 PM","1:48:00 PM","2:08:00 PM","2:48:00 PM","3:13:00 PM","3:33:00 PM","3:53:00 PM","4:18:00 PM","4:43:00 PM","5:13:00 PM","5:28:00 PM","5:33:00 PM","5:53:00 PM","6:13:00 PM","6:33:00 PM","7:30:00 PM","8:34:00 PM","9:48:00 PM"]);
var icnbstops = [stop9,stop10,stop11];