class CreatePropositionCovoiturages < ActiveRecord::Migration
  def change
    create_table :proposition_covoiturages do |t|
      t.string :depart
      t.integer :places
      t.string :name
      t.string :email
      t.string :telephone

      t.timestamps
    end
  end
end
