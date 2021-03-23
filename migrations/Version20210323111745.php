<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210323111745 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE site (id INT AUTO_INCREMENT NOT NULL, libelle VARCHAR(255) NOT NULL, code VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE entite ADD entite_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE entite ADD CONSTRAINT FK_1A2918271C750FD5 FOREIGN KEY (entite_type_id) REFERENCES entite_type (id)');
        $this->addSql('CREATE INDEX IDX_1A2918271C750FD5 ON entite (entite_type_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE site');
        $this->addSql('ALTER TABLE entite DROP FOREIGN KEY FK_1A2918271C750FD5');
        $this->addSql('DROP INDEX IDX_1A2918271C750FD5 ON entite');
        $this->addSql('ALTER TABLE entite DROP entite_type_id');
    }
}
