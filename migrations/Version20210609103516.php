<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210609103516 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE formule_produit (id INT AUTO_INCREMENT NOT NULL, produit_id INT NOT NULL, INDEX IDX_6B9E0197F347EFB (produit_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit_ingredient (produit_id INT NOT NULL, ingredient_id INT NOT NULL, INDEX IDX_C297417DF347EFB (produit_id), INDEX IDX_C297417D933FE08C (ingredient_id), PRIMARY KEY(produit_id, ingredient_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE formule_produit ADD CONSTRAINT FK_6B9E0197F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id)');
        $this->addSql('ALTER TABLE produit_ingredient ADD CONSTRAINT FK_C297417DF347EFB FOREIGN KEY (produit_id) REFERENCES produit (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit_ingredient ADD CONSTRAINT FK_C297417D933FE08C FOREIGN KEY (ingredient_id) REFERENCES ingredient (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit ADD prix DOUBLE PRECISION NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE formule_produit');
        $this->addSql('DROP TABLE produit_ingredient');
        $this->addSql('ALTER TABLE produit DROP prix');
    }
}
