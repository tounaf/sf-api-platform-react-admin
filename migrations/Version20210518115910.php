<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210518115910 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE achat ADD create_by_id INT NOT NULL, ADD create_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE achat ADD CONSTRAINT FK_26A984569E085865 FOREIGN KEY (create_by_id) REFERENCES `user` (id)');
        $this->addSql('CREATE INDEX IDX_26A984569E085865 ON achat (create_by_id)');
        $this->addSql('ALTER TABLE detail_achat ADD yes_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE detail_achat ADD CONSTRAINT FK_5B594F0F2CB716C7 FOREIGN KEY (yes_id) REFERENCES achat (id)');
        $this->addSql('CREATE INDEX IDX_5B594F0F2CB716C7 ON detail_achat (yes_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE achat DROP FOREIGN KEY FK_26A984569E085865');
        $this->addSql('DROP INDEX IDX_26A984569E085865 ON achat');
        $this->addSql('ALTER TABLE achat DROP create_by_id, DROP create_at');
        $this->addSql('ALTER TABLE detail_achat DROP FOREIGN KEY FK_5B594F0F2CB716C7');
        $this->addSql('DROP INDEX IDX_5B594F0F2CB716C7 ON detail_achat');
        $this->addSql('ALTER TABLE detail_achat DROP yes_id');
    }
}
