import ActivityCard from '../ActivityCard';

export default function ActivityCardExample() {
  return (
    <div className="p-4 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <ActivityCard
          title="Porta-lápis de Papelão"
          category="Projetos Iniciais"
          difficulty="Fácil"
          time="30–60 min"
          imageUrl="/assets/generated_images/Craft_supplies_illustration_blue_2b50f089.png"
          isLocked={false}
          onView={() => console.log('View activity')}
        />
        <ActivityCard
          title="Mão Robótica com Canudos"
          category="Projetos Intermediários"
          difficulty="Médio"
          time="60–90 min"
          imageUrl="/assets/generated_images/Robot_hand_craft_illustration_d1e063fc.png"
          isLocked={true}
          onUnlock={() => console.log('Unlock activity')}
          onView={() => {}}
        />
      </div>
    </div>
  );
}
