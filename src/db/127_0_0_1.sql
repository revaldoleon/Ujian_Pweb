-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Des 2025 pada 03.33
-- Versi server: 10.11.14-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `watchlist`
--
CREATE DATABASE IF NOT EXISTS `watchlist` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `watchlist`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `genre` varchar(100) DEFAULT NULL,
  `poster` text DEFAULT NULL,
  `is_watched` tinyint(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `movies`
--

INSERT INTO `movies` (`id`, `title`, `year`, `genre`, `poster`, `is_watched`, `created_at`) VALUES
(1, 'Inception', 2010, 'Sci-Fi', 'https://image.tmdb.org/t/p/original/vT2B1bABFiUyYOgOTqPBPt2W4xz.jpg', 0, '2025-12-02 12:59:17'),
(2, 'The Dark Knight', 2008, 'Action', 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', 1, '2025-12-02 12:59:17'),
(3, 'Interstellar', 2014, 'Sci-Fi', 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', 0, '2025-12-02 12:59:17'),
(4, 'Avengers: Endgame', 2019, 'Action', 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg', 1, '2025-12-02 12:59:17'),
(5, 'Joker', 2019, 'Drama', 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', 0, '2025-12-02 12:59:17'),
(6, 'Spider-Man: No Way Home', 2021, 'Action', 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', 0, '2025-12-02 12:59:17'),
(7, 'The Matrix', 1999, 'Sci-Fi', 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', 1, '2025-12-02 12:59:17'),
(8, 'Oppenheimer', 2023, 'Drama', 'https://image.tmdb.org/t/p/original/1mR8aTKAJWWjHKzh8Iu3gh9XXCc.jpg', 0, '2025-12-02 12:59:17'),
(9, 'Dune: Part Two', 2024, 'Sci-Fi', 'https://image.tmdb.org/t/p/original/uOYAbN3F5n3ne8TzWjzVEvQ7XGX.jpg', 0, '2025-12-02 12:59:17'),
(10, 'Frozen II', 2019, 'Animation', 'https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg', 1, '2025-12-02 12:59:17');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
