class CreateDemandeCovoiturages < ActiveRecord::Migration
  def change
    create_table :demande_covoiturages do |t|
      t.string :depart
      t.string :name
      t.string :email
      t.string :telephone

      t.timestamps
    end
  end
end
