<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210518122304 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE achat ADD entite_id INT NOT NULL');
        $this->addSql('ALTER TABLE achat ADD CONSTRAINT FK_26A984569BEA957A FOREIGN KEY (entite_id) REFERENCES entite (id)');
        $this->addSql('CREATE INDEX IDX_26A984569BEA957A ON achat (entite_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE achat DROP FOREIGN KEY FK_26A984569BEA957A');
        $this->addSql('DROP INDEX IDX_26A984569BEA957A ON achat');
        $this->addSql('ALTER TABLE achat DROP entite_id');
    }
}
