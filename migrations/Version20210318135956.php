<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210318135956 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE fonctionnalite_droit (fonctionnalite_id INT NOT NULL, droit_id INT NOT NULL, INDEX IDX_29095F6E4477C5D8 (fonctionnalite_id), INDEX IDX_29095F6E5AA93370 (droit_id), PRIMARY KEY(fonctionnalite_id, droit_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE fonctionnalite_droit ADD CONSTRAINT FK_29095F6E4477C5D8 FOREIGN KEY (fonctionnalite_id) REFERENCES fonctionnalite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fonctionnalite_droit ADD CONSTRAINT FK_29095F6E5AA93370 FOREIGN KEY (droit_id) REFERENCES droit (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE fonctionnalite_droit');
    }
}
