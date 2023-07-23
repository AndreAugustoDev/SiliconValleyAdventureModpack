ServerEvents.tags('item', event => {
  // Mystical Agriculture
  event.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:azure_silver_essence',
    'mysticalagriculture:crimson_iron_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
  event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:azure_silver_seeds',
    'mysticalagriculture:crimson_iron_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])

  event.add('minecraft:boats', /byg:\w+?_boat/)
  event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)

  event.add('forge:cheese', '#forge:cheeses')
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('forge:dusts/ender', 'ae2:ender_dust')
  event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
  event.add('forge:raw_materials', ['silentgear:raw_azure_silver', 'silentgear:raw_crimson_iron'])
  event.add('forge:rubber', ['ftbic:rubber', 'industrialforegoing:dryrubber', 'thermal:cured_rubber'])

  //temp byg fix until above 2.0.0.13
  event.add('c:black_sand', '#forge:black_sand')
  event.add('c:white_sand', '#forge:white_sand')
  event.add('c:blue_sand', '#forge:blue_sand')
  event.add('c:purple_sand', '#forge:purple_sand')
  event.add('c:pink_sand', '#forge:pink_sand')
})

ServerEvents.tags('block', event => {
  // Mystical Agriculture
  event.add('mysticalagriculture:crops', [
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:azure_silver_crop',
    'mysticalagriculture:crimson_iron_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop',
  ])
  // Ars Nouveau
  event.add('ars_nouveau:golem/budding', [
    'minecraft:budding_amethyst',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz'
  ])
  event.add('ars_nouveau:golem/cluster', [
    'minecraft:amethyst_cluster',
    'ae2:quartz_cluster'
  ])
  // Beacon Base Blocks
  event.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block'
    //,'allthetweaks:atm_star_block'
  ])
})

ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water', [
    'ad_astra:oil',
    'ad_astra:flowing_oil',
    'ad_astra:cryo_fuel',
    'ad_astra:flowing_cryo_fuel',
    'ad_astra:fuel',
    'ad_astra:flowing_fuel',
    'hexerei:blood_flowing',
    'hexerei:blood_fluid',
    'hexerei:tallow_flowing',
    'hexerei:tallow_fluid',
    'createaddition:flowing_seed_oil',
    'createaddition:seed_oil'])
})

ServerEvents.tags('worldgen/biome', event => {
  // Botania
  event.add('botania:mystical_flower_spawnlist', 'allthemodium:mining')
  event.add('botania:mystical_mushroom_spawnlist', [
    'allthemodium:the_other',
    'allthemodium:soul_sand_valley',
    'allthemodium:warped_forest',
    'allthemodium:desert_hills',
    'allthemodium:desert',
    'allthemodium:crimson_forest',
    'allthemodium:basalt_deltas'
  ])
  // ElementalCraft
  event.add('elementalcraft:has_sources/all', 'allthemodium:mining')
  event.add('elementalcraft:has_sources/sky', 'allthemodium:mining')
  event.add('elementalcraft:has_sources/plain', 'allthemodium:mining')
})

//temp fix for bambooeverything breaking boat tags until above 2.2.4
ServerEvents.highPriorityData(event => {
  event.addJson(`minecraft:tags/items/boats.json`, {
    "replace": true,
    "values": [
      "minecraft:oak_boat",
      "minecraft:spruce_boat",
      "minecraft:birch_boat",
      "minecraft:jungle_boat",
      "minecraft:acacia_boat",
      "minecraft:dark_oak_boat",
      "minecraft:mangrove_boat",
      "#minecraft:chest_boats",
      "bambooeverything:bamboo_raft",
      "deeperdarker:echo_boat"
    ]
  })
})
