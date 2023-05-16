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
-- Table structure for table `besoins`
--

DROP TABLE IF EXISTS `besoins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `besoins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(100) NOT NULL,
  `description` text,
  `quantite` int DEFAULT NULL,
  `ccp` varchar(100) NOT NULL,
  `archive` int NOT NULL DEFAULT '0',
  `photo` int NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `besoins`
--

LOCK TABLES `besoins` WRITE;
/*!40000 ALTER TABLE `besoins` DISABLE KEYS */;
INSERT INTO `besoins` VALUES (1,'Monnaie','Les familles ayant des difficultés financières peuvent éprouver des difficultés à payer leurs factures, à acheter de la nourriture et des fournitures de base, ou à accéder aux soins de santé et à l\'éducation.',123,'0000310603',0,-1),(2,'Médicament','Les analgésiques : ces médicaments sont utilisés pour soulager la douleur. Ils peuvent être prescrits pour des maux de tête, des douleurs articulaires ou musculaires, ou des douleurs chroniques. Les analgésiques les plus courants sont le paracétamol, l\'ibuprofène et l\'aspirine.Les antibiotiques : ces médicaments sont utilisés pour traiter les infections bactériennes.',456,'0000310745',0,-1),(3,'Vêtements','Des vêtements pour un orphelinat doivent être confortables, durables et pratiques pour les enfants. Ils doivent également être adaptés à différentes saisons et activités.',789,'0000320147',0,-1);
/*!40000 ALTER TABLE `besoins` ENABLE KEYS */;
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
