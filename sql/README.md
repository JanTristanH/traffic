# units
duration in seconds
distance in meters
traveltimeLoss in seconds
    
## Create tables
```

CREATE TABLE `traffic`.`location` (
     `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT ,
     `geo_lon` DOUBLE NOT NULL ,
     `geo_lat` DOUBLE NOT NULL ,
     `name` VARCHAR(32) NOT NULL ,
     PRIMARY KEY (`id`)) ENGINE = InnoDB;

INSERT INTO `location` (`id`, `geo_lon`, `geo_lat`, `name`) VALUES (NULL, '10.0506020', '53.5605155', 'Stoeckhardtraße');
INSERT INTO `location` (`id`, `geo_lon`, `geo_lat`, `name`) VALUES (NULL, '10.1730109', '51.7596378', 'Eisdorf');

CREATE TABLE `traffic`.`traveltime` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `location_from` INT NOT NULL ,
    `location_to` INT NOT NULL ,
    `duration` DOUBLE NOT NULL ,
    `distance` DOUBLE NOT NULL ,
    `traveltimeLoss` DOUBLE NOT NULL ,
    `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`id`)) ENGINE = InnoDB;

TODO: fremdschlüssel

CREATE TABLE poi (
    identifier VARCHAR(128) NOT NULL,
	display_type VARCHAR(32),
    future BOOLEAN,
    geo_lon DOUBLE,
    geo_lat DOUBLE,
    point VARCHAR(32)
)

CREATE TABLE interferences (
    identifier VARCHAR(128) NOT NULL,
	display_type VARCHAR(32),
    future BOOLEAN,
    geo_lon DOUBLE,
    geo_lat DOUBLE,
    info VARCHAR(32), 
)
```