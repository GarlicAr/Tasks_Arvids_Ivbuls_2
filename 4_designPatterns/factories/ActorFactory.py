class ActorFactory:
    @staticmethod
    def create_actor(actor_type: EnumActor, position: Vector2, tribe: EnumTribe) -> Actor:
        actor = Actor()
        actor.position = position.copy()
        actor.position.x += random.randint(-2, 2)
        actor.position.y += random.randint(-2, 2)
        actor.tribe = tribe
        actor.actor_type = actor_type
        return actor

