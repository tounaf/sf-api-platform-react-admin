<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210323112445 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE entite ADD site_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE entite ADD CONSTRAINT FK_1A291827F6BD1646 FOREIGN KEY (site_id) REFERENCES site (id)');
        $this->addSql('CREATE INDEX IDX_1A291827F6BD1646 ON entite (site_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE entite DROP FOREIGN KEY FK_1A291827F6BD1646');
        $this->addSql('DROP INDEX IDX_1A291827F6BD1646 ON entite');
        $this->addSql('ALTER TABLE entite DROP site_id');
    }
}
