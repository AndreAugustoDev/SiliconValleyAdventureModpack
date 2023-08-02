ServerEvents.genericLootTables(event => {
  event.addGeneric("lootbags:loot_bags/mystical_agriculture/seedbag_tier_1", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mysticalagriculture:inferium_essence", 10, [2, 4]);
      pool.addItem("mysticalagriculture:inferium_seeds", 5, [1, 2]);
      pool.addItem("mysticalagriculture:inferium_block", 5);
      pool.addItem("mysticalagriculture:inferium_furnace", 3);
      pool.addItem("mysticalagriculture:inferium_growth_accelerator", 2);
      pool.addItem("mysticalagriculture:inferium_gemstone", 3);
      pool.addItem("mysticalagriculture:inferium_ingot", 5, [1, 3]);
      pool.addItem("mysticalagradditions:inferium_coal", 5, [1, 4]);
      pool.addItem("mysticalagradditions:inferium_apple", 5, [1, 3]);
      pool.addItem("mysticalagriculture:inferium_farmland", 7, [1, 3]);
      pool.addItem("mysticalagriculture:prosperity_seed_base", 5, [1, 3]);
      pool.addItem("mysticalagriculture:prosperity_gemstone", 3, [1, 2]);
      pool.addItem("mysticalagriculture:prosperity_ingot", 10, [1, 4]);
      pool.addItem("mysticalagriculture:prosperity_shard", 10, [4, 12]);
      pool.addItem("mysticalagriculture:prosperity_block", 5);
      pool.addItem("mysticalagriculture:fertilized_essence", 1, [1, 3]);
      pool.addItem(Item.of("minecraft:enchanted_book").enchant("mysticalagriculture:mystical_enlightenment", 1));
      pool.addItem("mysticalagriculture:unattuned_augment", 5);
      pool.addItem("mysticalagriculture:soulium_ingot", 3);
      pool.addItem("mysticalagriculture:soulium_ore", 5, [1, 2]);
      pool.addItem("mysticalagriculture:soulstone_cobble", 5, [2, 5]);
      pool.addItem("mysticalagriculture:soul_glass", 3);
      pool.addItem("mysticalagriculture:soul_jar");
      pool.addItem("mysticalagriculture:infusion_crystal", 2);
    });
  });

  event.addGeneric("lootbags:loot_bags/mystical_agriculture/seedbag_tier_2", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mysticalagriculture:nature_seeds", 3);
      pool.addItem("mysticalagriculture:dye_seeds", 3);
      pool.addItem("mysticalagriculture:nether_seeds", 3);
      pool.addItem("mysticalagriculture:coal_seeds");
      pool.addItem("mysticalagriculture:honey_seeds");
      pool.addItem("mysticalagriculture:amethyst_seeds", 2);
      pool.addItem("mysticalagriculture:aluminum_seeds", 3);
      pool.addItem("mysticalagriculture:apatite_seeds", 3);
      pool.addItem("mysticalagriculture:mystical_flower_seeds", 2);
      pool.addItem("mysticalagradditions:prudentium_apple", 7);
      pool.addItem("mysticalagradditions:prudentium_coal_block", 3);
      pool.addItem("mysticalagriculture:mining_aoe_i_augment");
      pool.addItem("mysticalagriculture:speed_i_augment");
      pool.addItem("mysticalagriculture:health_boost_ii_augment");
      pool.addItem("mysticalagriculture:water_breathing_augment");
      pool.addItem("mysticalagriculture:night_vision_augment");
      pool.addItem("mysticalagriculture:menril_seeds", 2);
      pool.addItem("mysticalagriculture:limestone_seeds", 3);
      pool.addItem("mysticalagriculture:prudentium_block", 3);
      pool.addItem("mysticalagriculture:prudentium_farmland", 7);
      pool.addItem("mysticalagriculture:prudentium_growth_accelerator", 5);
      pool.addItem("mysticalagriculture:prudentium_furnace", 5);
      pool.addItem("mysticalagriculture:prudentium_essence", 10, [4, 8]);
      pool.addItem("mysticalagriculture:prudentium_ingot", 7, [1, 3]);
      pool.addItem("mysticalagriculture:prudentium_gemstone", 5);
      pool.addItem("mysticalagriculture:pig_seeds");
      pool.addItem("mysticalagriculture:chicken_seeds");
      pool.addItem("mysticalagriculture:cow_seeds");
      pool.addItem("mysticalagriculture:sheep_seeds");
      pool.addItem("mysticalagriculture:squid_seeds");
      pool.addItem("mysticalagriculture:fish_seeds");
      pool.addItem("mysticalagriculture:slime_seeds");
      pool.addItem("mysticalagriculture:turtle_seeds");
    });
  });

  event.addGeneric("lootbags:loot_bags/mystical_agriculture/seedbag_tier_3", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mysticalagriculture:tertium_farmland", 5);
      pool.addItem("mysticalagriculture:iron_seeds", 2);
      pool.addItem("mysticalagriculture:copper_seeds", 5);
      pool.addItem("mysticalagriculture:nether_quartz_seeds", 2);
      pool.addItem("mysticalagriculture:glowstone_seeds", 3);
      pool.addItem("mysticalagriculture:redstone_seeds", 3);
      pool.addItem("mysticalagriculture:obsidian_seeds");
      pool.addItem("mysticalagriculture:prismarine_seeds", 3);
      pool.addItem("mysticalagriculture:zombie_seeds", 2);
      pool.addItem("mysticalagriculture:silver_seeds", 2);
      pool.addItem("mysticalagriculture:brass_seeds");
      pool.addItem("mysticalagriculture:zinc_seeds", 3);
      pool.addItem("mysticalagriculture:bronze_seeds");
      pool.addItem("mysticalagriculture:tin_seeds", 3);
      pool.addItem("mysticalagriculture:rabbit_seeds", 3);
      pool.addItem("mysticalagriculture:spider_seeds", 2);
      pool.addItem("mysticalagriculture:creeper_seeds");
      pool.addItem("mysticalagriculture:skeleton_seeds", 3);
      pool.addItem("mysticalagriculture:lead_seeds", 3);
      pool.addItem("mysticalagriculture:blizz_seeds");
      pool.addItem("mysticalagriculture:blitz_seeds");
      pool.addItem("mysticalagriculture:basalz_seeds");
      pool.addItem("mysticalagriculture:certus_quartz_seeds", 2);
      pool.addItem("mysticalagriculture:quartz_enriched_iron_seeds");
      pool.addItem("mysticalagriculture:no_fall_damage_augment");
      pool.addItem("mysticalagriculture:mining_aoe_ii_augment");
      pool.addItem("mysticalagriculture:tertium_essence", 10, [1, 3]);
      pool.addItem("mysticalagriculture:tertium_furnace");
      pool.addItem("mysticalagriculture:tertium_ingot", 7, [1, 2]);
      pool.addItem("mysticalagriculture:tertium_gemstone", 5);
      pool.addItem("mysticalagriculture:tertium_block");
      pool.addItem("mysticalagradditions:tertium_apple", 7, [1, 3]);
      pool.addItem("mysticalagradditions:tertium_coal", 5, [1, 4]);
      pool.addItem("mysticalagradditions:tertium_coal_block", 3);
    });
  });

  event.addGeneric("lootbags:loot_bags/mystical_agriculture/seedbag_tier_4", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mysticalagriculture:imperium_farmland", 7);
      pool.addItem("mysticalagriculture:gold_seeds", 2);
      pool.addItem("mysticalagriculture:lapis_lazuli_seeds", 3);
      pool.addItem("mysticalagriculture:end_seeds", 3);
      pool.addItem("mysticalagriculture:experience_seeds");
      pool.addItem("mysticalagriculture:blaze_seeds", 2);
      pool.addItem("mysticalagriculture:ghast_seeds");
      pool.addItem("mysticalagriculture:enderman_seeds", 2);
      pool.addItem("mysticalagriculture:steel_seeds", 2);
      pool.addItem("mysticalagriculture:nickel_seeds", 3);
      pool.addItem("mysticalagriculture:constantan_seeds");
      pool.addItem("mysticalagriculture:electrum_seeds");
      pool.addItem("mysticalagriculture:invar_seeds");
      pool.addItem("mysticalagriculture:uranium_seeds", 2);
      pool.addItem("mysticalagriculture:ruby_seeds", 3);
      pool.addItem("mysticalagriculture:sapphire_seeds", 3);
      pool.addItem("mysticalagriculture:signalum_seeds");
      pool.addItem("mysticalagriculture:lumium_seeds");
      pool.addItem("mysticalagriculture:osmium_seeds", 3);
      pool.addItem("mysticalagriculture:fluorite_seeds", 3);
      pool.addItem("mysticalagriculture:refined_glowstone_seeds", 2);
      pool.addItem("mysticalagriculture:refined_obsidian_seeds");
      pool.addItem("mysticalagriculture:fluix_seeds", 2);
      pool.addItem("mysticalagradditions:imperium_coal", 7, [1, 4]);
      pool.addItem("mysticalagradditions:imperium_coal_block", 5);
      pool.addItem("mysticalagradditions:imperium_apple", 10, [1, 3]);
      pool.addItem("mysticalagriculture:imperium_essence", 7, [1, 4]);
      pool.addItem("mysticalagriculture:imperium_block");
      pool.addItem("mysticalagriculture:imperium_growth_accelerator", 5);
      pool.addItem("mysticalagriculture:imperium_furnace", 5);
      pool.addItem("mysticalagriculture:imperium_ingot", 5, [1, 2]);
      pool.addItem("mysticalagriculture:imperium_gemstone", 5);
    });
  });
  event.addGeneric("lootbags:loot_bags/mystical_agriculture/seedbag_tier_5", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mysticalagriculture:diamond_seeds");
      pool.addItem("mysticalagriculture:supremium_farmland", 10);
      pool.addItem("mysticalagriculture:emerald_seeds");
      pool.addItem("mysticalagriculture:netherite_seeds");
      pool.addItem("mysticalagriculture:wither_skeleton_seeds", 3);
      pool.addItem("mysticalagriculture:platinum_seeds", 3);
      pool.addItem("mysticalagriculture:iridium_seeds", 3);
      pool.addItem("mysticalagriculture:enderium_seeds");
      pool.addItem("mysticalagriculture:uraninite_seeds", 3);
      pool.addItem("mysticalagriculture:supremium_furnace", 3);
      pool.addItem("mysticalagriculture:supremium_growth_accelerator", 5);
      pool.addItem("mysticalagriculture:supremium_block");
      pool.addItem("mysticalagradditions:supremium_apple", 10);
      pool.addItem("mysticalagradditions:supremium_coal", 7);
      pool.addItem("mysticalagradditions:supremium_coal_block", 5);
      pool.addItem("mysticalagriculture:strength_iii_augment", 3);
      pool.addItem("mysticalagriculture:health_boost_v_augment", 3);
      pool.addItem("mysticalagriculture:flight_augment");
      pool.addItem("mysticalagriculture:supremium_essence", 10, [1, 2]);
      pool.addItem("mysticalagriculture:supremium_ingot", 5, [1, 3]);
      pool.addItem("mysticalagriculture:supremium_gemstone", 5, [1, 2]);
    });
  });
  event.addGeneric("lootbags:loot_bags/mystical_agriculture/seedbag_tier_6", table => {
    table.addPool(pool => {
      pool.rolls = 1.0;
      pool.addItem("mysticalagriculture:dragon_egg_seeds");
      pool.addItem("mysticalagriculture:nether_star_seeds");
      pool.addItem("mysticalagradditions:insanium_farmland", 7);
      pool.addItem("mysticalagradditions:insanium_coal_block", 5);
      pool.addItem("mysticalagradditions:insanium_essence", 5, [1, 2]);
      pool.addItem("mysticalagradditions:insanium_ingot", 7);
      pool.addItem("mysticalagradditions:insanium_gemstone", 5);
      pool.addItem("mysticalagradditions:insanium_coal", 5, [1, 3]);
      pool.addItem("mysticalagradditions:insanium_apple", 7, [1, 3]);
      pool.addItem("mysticalagradditions:supremium_coal_block", 5);
      pool.addItem("mysticalagriculture:supremium_furnace", 3);
      pool.addItem("mysticalagriculture:supremium_farmland", 10);
      pool.addItem("mysticalagriculture:supremium_gemstone", 7);
      pool.addItem("mysticalagriculture:supremium_ingot", 10, [1, 3]);
      pool.addItem("mysticalagriculture:supremium_essence", 10, [1, 4]);
      pool.addItem("mysticalagriculture:flight_augment", 3);
      pool.addItem("mysticalagriculture:terrasteel_seeds", 3);
      pool.addItem("mysticalagriculture:enderium_seeds", 3);
      pool.addItem("mysticalagriculture:netherite_seeds", 3);
      pool.addItem("mysticalagriculture:emerald_seeds", 5);
      pool.addItem("mysticalagriculture:diamond_seeds", 7);
    });
  });
});
