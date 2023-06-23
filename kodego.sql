-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2023 at 11:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kodego`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `grade` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstname`, `lastname`, `grade`) VALUES
(1, 'Carlo', 'Miranda', '100'),
(2, 'Carlo', 'Miranda', '100'),
(3, 'Carlo', 'Miranda', '100'),
(4, 'Carlo', 'Miranda', '100'),
(5, 'Carlo', 'Miranda', '100'),
(6, 'Carlo', 'Miranda', '100'),
(7, 'Carlo', 'Miranda', '100'),
(8, 'Carlo', 'Miranda', '100'),
(9, 'Carlo', 'Miranda', '100'),
(10, 'Carlo', 'Miranda', '100'),
(11, 'Carlo', 'Miranda', '100'),
(12, 'Carlo', 'Miranda', '100'),
(13, 'Carlo', 'Miranda', '100'),
(14, 'Carlo', 'Miranda', '100'),
(15, 'Carlo', 'Miranda', '100'),
(16, 'Carlo', 'Miranda', '100'),
(17, 'Carlo', 'Miranda', '100'),
(18, 'Carlo', 'Miranda', '100'),
(19, 'Carlo', 'Miranda', '100'),
(20, 'Carlo', 'Miranda', '100'),
(21, 'Carlo', 'Miranda', '100'),
(22, 'Carlo', 'Miranda', '100'),
(23, 'Carlo', 'Miranda', '100'),
(24, 'Carlo', 'Miranda', '100'),
(25, 'Carlo', 'Miranda', '100'),
(26, 'Carlo', 'Miranda', '100');

-- --------------------------------------------------------

--
-- Table structure for table `tweets`
--

CREATE TABLE `tweets` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `date_tweeted` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `tweets`
--

INSERT INTO `tweets` (`id`, `content`, `date_tweeted`, `user_id`) VALUES
(1, 'tetest', '0000-00-00', 8),
(2, 'hello world', '0000-00-00', 8),
(3, 'hello ', '0000-00-00', 8),
(4, 'asdasdasd', '0000-00-00', 8),
(5, 'asdadsadsad', '0000-00-00', 8),
(6, 'Hello world!', '0000-00-00', 8),
(7, 'hello to you din', '0000-00-00', 9),
(0, 'carlo', '0000-00-00', 1),
(0, '', '0000-00-00', 8),
(0, 'hello carlo', '0000-00-00', 7),
(0, 'test5', '0000-00-00', 7);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `birthdate`, `email`, `password`) VALUES
(1, 'Carlo', 'Miranda', '2023-07-06', 'carlomiranda161@gmail.com', '$2y$10$.BXYcMsADrWzjzVhFLGQFeSJvu3et0/1/hVB787DTmwTbMJMvypRi'),
(2, 'test', 'test', '2023-06-13', 'test', '$2y$10$rIUcxC5EpSNDnVdIOfoBRe3MaKgfnbYDpk16lPwpOP1524Y9b9P2.'),
(3, 'test2', 'test2', '2023-06-13', 'test2', '$2y$10$L1hP1rNIIDLuFzO06LA5hOc7zRQHvORCcncKRWhHwDdvYB0MWFJhe'),
(4, 'Carlo', 'Miranda', '2023-05-30', 'carlomiranda161', '$2y$10$f73ktbkj/cQIgiRJIaiJGucyusLfcnIJO/YB5zY.YSV.6onWyajt.'),
(5, 'test3', 'test3', '2023-05-31', 'test3', '$2y$10$QR6jiP8oOuIM9J3uigER/uZJoKnXVLE4ZZKNJ89R7k9drK2KzlXgm'),
(6, 'test4', 'test4', '2023-05-30', 'geniaflores0817@gmail.com', '$2y$10$lxh0uJZqBnFM3oHAw754KOG9RhbY/BKHw9EISvnPxLDnTIkLTTxxu'),
(7, 'test5', 'test5', '2023-06-27', 'test5@gmail.com', '$2y$10$SJ4rLCmtEF7r2LTQ4Q2jD.FxvL3mIOBLZsB8Wx6A4EPguSn9TI89S'),
(8, 'Mario Carlo', 'Miranda', '2023-06-19', 'carlo@gmail.com', '$2y$10$wyHkCDk1AU.ZZ1HcZ5NywuXymgTm66209r074rN37GOLhBWKGSKg2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tweets`
--
ALTER TABLE `tweets`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
