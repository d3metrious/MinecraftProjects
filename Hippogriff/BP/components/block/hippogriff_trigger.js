
const Minecraft = require('Minecraft');
const Entity = Minecraft.Entity;

Minecraft.events.on('player_movement', (event) => {
	const player = event.player;
	const playerPosition = player.location;

	// Check if the player is near the custom block
	const blockPosition = this.location;
	const distance = playerPosition.distanceTo(blockPosition);

	if (distance <= 5) { // Adjust the range as needed
		// Spawn the entity (e.g., a creeper)
		const spawnedEntity = Entity.createEntity("minecraft:creeper", blockPosition);
		blockPosition.world.spawnEntity(spawnedEntity);

		// Optionally, add the custom component to the custom block to prevent repeated spawning
		const customBlock = this.getEntity();
		//customBlock.addComponent("your_namespace:spawn_entity_near_block");
	}
});
