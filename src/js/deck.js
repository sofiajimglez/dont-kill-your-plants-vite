import CaressCard from './cards/caress-card';
import FertilizeCard from './cards/fertilize-card';
import MedicineCard from './cards/medicine-card';
import PlayCard from './cards/play-card';
import PruneCard from './cards/prune-card';
import TalkCard from './cards/talk-card';
import TransplantCard from './cards/transplant-card';
import WaterCard from './cards/water-card';
import WaterPlusCard from './cards/water-plus-card';
import WindowCard from './cards/window-card';

export default function createDeck(cardsContainer, onClickCard) {
  return [
    Array.from({length: 1}, () => new CaressCard(cardsContainer, onClickCard)),
    Array.from({length: 3}, () => new FertilizeCard(cardsContainer, onClickCard)),
    Array.from({length: 2}, () => new MedicineCard(cardsContainer, onClickCard)),
    Array.from({length: 1}, () => new PlayCard(cardsContainer, onClickCard)),
    Array.from({length: 3}, () => new PruneCard(cardsContainer, onClickCard)),
    Array.from({length: 3}, () => new TalkCard(cardsContainer, onClickCard)),
    Array.from({length: 3}, () => new TransplantCard(cardsContainer, onClickCard)),
    Array.from({length: 4}, () => new WaterCard(cardsContainer, onClickCard)),
    Array.from({length: 2}, () => new WaterPlusCard(cardsContainer, onClickCard)),
    Array.from({length: 3}, () => new WindowCard(cardsContainer, onClickCard))
  ].flat();
}