JEIEvents.hideItems(event => {
  // event.hide(/extrastorage:(block|disk|storagepart)_.+/)
  // event.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
  // event.hide('twilightforest:uncrafting_table')
  // event.hide(['angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
  Color.DYE.forEach(color => {
    ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
      event.hide(`refinedstorage:${color}_${machine}`)
    })
  })
})
