-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2022 at 07:58 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `players`
--

-- --------------------------------------------------------

--
-- Table structure for table `clubs`
--

CREATE TABLE `clubs` (
  `idclub` int(11) NOT NULL,
  `club` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clubs`
--

INSERT INTO `clubs` (`idclub`, `club`) VALUES
(1, 'Real Madrid'),
(2, 'Olympique Lyon'),
(3, 'Flamengo'),
(4, 'RCD Mallorca'),
(5, 'Espanyol'),
(6, 'Paris Saint Germain'),
(7, 'Monaco'),
(8, 'Bayern Munchen'),
(9, 'Dortmund'),
(11, 'Lech Poznan'),
(12, 'Znicz Pruszkow'),
(13, 'Legia II'),
(14, 'Juventus'),
(15, 'AS Roma'),
(16, 'Liverpool'),
(17, 'Fiorentina'),
(18, 'Chelsea'),
(20, 'Basel'),
(21, 'El Mokawloon'),
(22, 'Southampton'),
(23, 'RB Salzburg'),
(24, 'Metz'),
(25, 'Manchester City'),
(26, 'Wolfsburg'),
(27, 'Werder Bremen'),
(28, 'Genk'),
(29, 'Queen\'s Park Rangers'),
(34, 'Atletico Madrid'),
(35, 'Benfica');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `idcountry` int(11) NOT NULL,
  `country` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`idcountry`, `country`) VALUES
(1, 'France'),
(2, 'Brazil'),
(3, 'Spain'),
(4, 'Poland'),
(5, 'Egypt'),
(6, 'Senegal'),
(7, 'Belgium'),
(8, 'England'),
(14, 'Portugal'),
(17, 'Finland'),
(19, 'Sweden');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `idhistory` int(11) NOT NULL,
  `idplayer` int(11) NOT NULL,
  `idclub` int(11) NOT NULL,
  `period` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`idhistory`, `idplayer`, `idclub`, `period`) VALUES
(1, 1, 1, 'Jul 9, 2009 - Now'),
(2, 1, 2, 'Jul 1, 2005 - Jul 9, 2009'),
(155, 78, 1, 'Jul 12, 2018 - Now'),
(156, 78, 3, 'May 8, 2017 - Jul 12, 2018'),
(157, 79, 1, 'Jun 30, 2016 - Now'),
(158, 79, 5, 'Aug 20, 2015 - Jun 30, 2016'),
(159, 79, 4, 'Jul 1, 2014 - Aug 20, 2015'),
(160, 80, 6, 'Aug 31, 2017 - Now'),
(161, 80, 7, 'Jul 1, 2015 - Aug 31, 2017'),
(162, 81, 8, 'Jul 1, 2014 - Now'),
(163, 81, 9, 'Jul 1, 2010 - Jul 1, 2014'),
(164, 81, 11, 'Jun 18, 2008 - Jul 1, 2010'),
(165, 81, 12, 'Jul 1, 2006 - Jun 18, 2008'),
(166, 81, 13, 'Jul 1, 2005 - Jul 1, 2006'),
(168, 83, 8, 'Aug 30, 2015 - Now'),
(169, 83, 14, 'Jul 1, 2014 - Aug 30, 2015'),
(170, 83, 6, 'Jul 1, 2013 - Jul 1, 2014 '),
(171, 84, 16, 'Jul 1, 2017 - Now'),
(172, 84, 15, 'Aug 6, 2015 - Jul 1, 2017'),
(173, 84, 17, 'Feb 2, 2015 - Aug 6, 2015'),
(174, 84, 18, 'Jan 26, 2014 - Feb 2, 2015'),
(175, 84, 20, 'Jul 1, 2012 - Jan 26, 2014'),
(176, 84, 21, 'May 1, 2010 - Jul 1, 2012'),
(177, 85, 16, 'Jul 1, 2016 - Now'),
(178, 85, 22, 'Sep 1, 2014 - Jul 1, 2016'),
(179, 85, 23, 'Aug 31, 2012 - Sep 1, 2014'),
(180, 85, 24, 'Jan 1, 2012 - Aug 31, 2012'),
(185, 87, 25, 'Aug 30, 2015 - Now'),
(186, 87, 26, 'Jan 18, 2014 - Aug 30, 2015'),
(187, 87, 27, 'Aug 2, 2012 - Jan 18, 2014'),
(188, 87, 28, 'Jul 1, 2008 - Aug 2, 2012'),
(189, 88, 25, 'Jul 14, 2015 - Now'),
(190, 88, 16, 'Jul 1, 2012 - Jul 14, 2015'),
(191, 88, 29, 'Feb 16, 2010 - Jul 1, 2012');

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `idcountry` int(11) NOT NULL,
  `idposition` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `image` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `idcountry`, `idposition`, `name`, `image`) VALUES
(1, 1, 1, 'Karim Benzema', '../images/../images/../images/Karim-Benzema.jpg'),
(78, 2, 2, 'Vinicius Junior', '../images/Vinicius-Junior.jpg'),
(79, 3, 3, 'Marco Asensio', '../images/../images/../images/Marco-Asensio.jpg'),
(80, 1, 1, 'Kylian Mbappe', '../images/Kylian-Mbappe.jpg'),
(81, 4, 1, 'Robert Lewandowski', '../images/Robert-Lewandowski.jpg'),
(83, 1, 3, 'Kingsley Coman', '../images/Kingsley-Coman.jpg'),
(84, 5, 3, 'Mohamed Salah', '../images/Mohamed-Salah.jpg'),
(85, 6, 2, 'Sadio Mane', '../images/Sadio-Mane.jpg'),
(87, 7, 4, 'Kevin De Bruyne', '../images/../images/Kevin-De-Bruyne.jpg'),
(88, 8, 2, 'Raheem Sterling', '../images/Raheem-Sterling.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `idposition` int(11) NOT NULL,
  `position` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`idposition`, `position`) VALUES
(1, 'Centre-Forward'),
(2, 'Left Winger'),
(3, 'Right Winger '),
(4, 'Attacking Midfield'),
(10, 'Second Striker');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clubs`
--
ALTER TABLE `clubs`
  ADD PRIMARY KEY (`idclub`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`idcountry`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`idhistory`),
  ADD KEY `idx_idplayer` (`idplayer`),
  ADD KEY `idx_idclub` (`idclub`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_idcountry` (`idcountry`),
  ADD KEY `idx_idposition` (`idposition`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`idposition`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clubs`
--
ALTER TABLE `clubs`
  MODIFY `idclub` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `idcountry` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `idhistory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=192;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `idposition` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`idplayer`) REFERENCES `players` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`idclub`) REFERENCES `clubs` (`idclub`) ON DELETE CASCADE;

--
-- Constraints for table `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `players_ibfk_1` FOREIGN KEY (`idcountry`) REFERENCES `countries` (`idcountry`) ON DELETE CASCADE,
  ADD CONSTRAINT `players_ibfk_2` FOREIGN KEY (`idposition`) REFERENCES `positions` (`idposition`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
