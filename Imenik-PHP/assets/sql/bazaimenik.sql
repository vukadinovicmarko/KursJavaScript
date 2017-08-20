-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2016 at 02:56 PM
-- Server version: 5.6.26
-- PHP Version: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bazaimenik`
--

-- --------------------------------------------------------

--
-- Table structure for table `osobe`
--

CREATE TABLE IF NOT EXISTS `osobe` (
  `id_osobe` int(11) NOT NULL,
  `ime` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `prezime` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `adresa` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `brojKucnog` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `brojMobilnog` varchar(11) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `osobe`
--

INSERT INTO `osobe` (`id_osobe`, `ime`, `prezime`, `adresa`, `brojKucnog`, `brojMobilnog`) VALUES
(5, 'Marko', 'Vukadinoviuc', 'Aopsdk 2', '011/101010', '064/202020'),
(6, 'Marko', 'Vukadinovic', 'Markova Ulica 3', '011/000000', '064/2020202'),
(7, 'Ana', 'Stanic', 'Kasdko 2', '011/101010', '064/030303'),
(8, 'Petar', 'Peric', 'Koasdko 2', '011/101010', '064/3939390'),
(9, 'Marko', 'Vukadinovic', 'Sadkoaskd 2', '011/010101', '064/7543245');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `osobe`
--
ALTER TABLE `osobe`
  ADD PRIMARY KEY (`id_osobe`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `osobe`
--
ALTER TABLE `osobe`
  MODIFY `id_osobe` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
