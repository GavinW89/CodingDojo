-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dojos_and_ninjas_schema
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dojos_and_ninjas_schema` ;

-- -----------------------------------------------------
-- Schema dojos_and_ninjas_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dojos_and_ninjas_schema` DEFAULT CHARACTER SET utf8 ;
USE `dojos_and_ninjas_schema` ;

-- -----------------------------------------------------
-- Table `dojos_and_ninjas_schema`.`dojos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojos_and_ninjas_schema`.`dojos` (
  `iddojo` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`iddojo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dojos_and_ninjas_schema`.`Ninjas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojos_and_ninjas_schema`.`Ninjas` (
  `idNinja` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `age` INT NULL,
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  `created_at` DATETIME NULL DEFAULT NOW(),
  `dojo_iddojo` INT NOT NULL,
  PRIMARY KEY (`idNinja`),
  INDEX `fk_Ninja_dojo_idx` (`dojo_iddojo` ASC) VISIBLE,
  CONSTRAINT `fk_Ninja_dojo`
    FOREIGN KEY (`dojo_iddojo`)
    REFERENCES `dojos_and_ninjas_schema`.`dojos` (`iddojo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
