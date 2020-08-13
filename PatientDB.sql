-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 07, 2020 at 09:50 AM
-- Server version: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PatientDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `PatientTbl`
--

CREATE TABLE `PatientTbl` (
  `PatientId` int(11) NOT NULL,
  `PatientName` varchar(50) NOT NULL,
  `PatientSurname` varchar(50) NOT NULL,
  `PatientEmail` text NOT NULL,
  `PatientPass` text NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `PaymentTbl`
--

CREATE TABLE `PaymentTbl` (
  `PaymentId` int(11) NOT NULL,
  `DebitAmt` int(11) NOT NULL DEFAULT '0',
  `CreditAmt` int(11) NOT NULL DEFAULT '0',
  `Remarks` text,
  `PatientId` text,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `PatientTbl`
--
ALTER TABLE `PatientTbl`
  ADD PRIMARY KEY (`PatientId`);

--
-- Indexes for table `PaymentTbl`
--
ALTER TABLE `PaymentTbl`
  ADD PRIMARY KEY (`PaymentId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `PatientTbl`
--
ALTER TABLE `PatientTbl`
  MODIFY `PatientId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `PaymentTbl`
--
ALTER TABLE `PaymentTbl`
  MODIFY `PaymentId` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
