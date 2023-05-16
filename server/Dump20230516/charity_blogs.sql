-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: charity
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `authorMail` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `timestamp` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (7,'admin@gmail.com','Nous sommes ravis de partager avec vous l\'impact positif que vos dons ont sur les vies des personnes dans le besoin. Grâce à votre générosité et votre soutien, nous avons pu apporter un nouvel espoir à de nombreuses communautés.','Donner un nouvel espoir : Comment vos dons changent des vies','18-04-2023 12:18:59'),(8,'admin@gmail.com','Des histoires inspirantes : Des individus Aujourd\'hui, nous souhaitons partager avec vous des histoires inspirantes de personnes extraordinaires qui ont réussi à surmonter des défis insurmontables grâce à votre soutien indéfectible. Leurs récits démontrent la force de la résilience humaine et l\'importance cruciale de votre générosité.','Des histoires inspirantes : Des individus courageux','11-05-2023 18:39:25'),(9,'admin@gmail.com','Aujourd\'hui, nous souhaitons partager avec vous des histoires inspirantes de personnes extraordinaires qui ont réussi à surmonter des défis insurmontables grâce à votre soutien indéfectible. Leurs récits démontrent la force de la résilience humaine et l\'importance cruciale de votre générosité.','Créer un impact durable : Explorer l\'impact des dons','11-05-2023 18:39:50'),(11,'admin@gmail.com','Aujourd\'hui, nous souhaitons partager avec vous des histoires inspirantes de personnes extraordinaires qui ont réussi à surmonter des défis insurmontables grâce à votre soutien indéfectible. Leurs récits démontrent la force de la résilience humaine et l\'importance cruciale de votre générosité.','Créer un impact durable : Explorer l\'impact des dons','11-05-2023 18:40:20');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-16 21:29:00
