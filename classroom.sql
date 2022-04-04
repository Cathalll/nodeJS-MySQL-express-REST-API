CREATE TABLE `classroom` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameClassroom` varchar(45) DEFAULT NULL,
  `capacityClassroom` int(11) DEFAULT NULL,
  `enabledClassroom` tinyint(1) DEFAULT '1',
   PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--

INSERT INTO `classroom` (`nameClassroom`, `capacityClassroom`, `enabledClassroom`) VALUES
('101', 40, 1),
('102', 60, 1),
('103', 25, 1),
('104', 40, 1),
('201', 30, 1);



