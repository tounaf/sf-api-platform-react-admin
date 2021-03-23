<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210323110859 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fonctionnalite_droit DROP FOREIGN KEY FK_29095F6E5AA93370');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6499BEA957A');
        $this->addSql('ALTER TABLE fonctionnalite_droit DROP FOREIGN KEY FK_29095F6E4477C5D8');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649F6BD1646');
        $this->addSql('DROP TABLE action');
        $this->addSql('DROP TABLE droit');
        $this->addSql('DROP TABLE entite');
        $this->addSql('DROP TABLE fonctionnalite');
        $this->addSql('DROP TABLE fonctionnalite_droit');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE site');
        $this->addSql('DROP TABLE type_site');
        $this->addSql('DROP INDEX IDX_8D93D6499BEA957A ON user');
        $this->addSql('DROP INDEX IDX_8D93D649F6BD1646 ON user');
        $this->addSql('ALTER TABLE user DROP site_id, DROP entite_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE action (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, code VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, actif TINYINT(1) DEFAULT NULL, date_creation DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE droit (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE entite (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, code VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fonctionnalite (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, code VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, visible TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fonctionnalite_droit (fonctionnalite_id INT NOT NULL, droit_id INT NOT NULL, INDEX IDX_29095F6E5AA93370 (droit_id), INDEX IDX_29095F6E4477C5D8 (fonctionnalite_id), PRIMARY KEY(fonctionnalite_id, droit_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE site (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE type_site (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, code VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE fonctionnalite_droit ADD CONSTRAINT FK_29095F6E4477C5D8 FOREIGN KEY (fonctionnalite_id) REFERENCES fonctionnalite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fonctionnalite_droit ADD CONSTRAINT FK_29095F6E5AA93370 FOREIGN KEY (droit_id) REFERENCES droit (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE `user` ADD site_id INT DEFAULT NULL, ADD entite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D6499BEA957A FOREIGN KEY (entite_id) REFERENCES entite (id)');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649F6BD1646 FOREIGN KEY (site_id) REFERENCES site (id)');
        $this->addSql('CREATE INDEX IDX_8D93D6499BEA957A ON `user` (entite_id)');
        $this->addSql('CREATE INDEX IDX_8D93D649F6BD1646 ON `user` (site_id)');
    }
}
