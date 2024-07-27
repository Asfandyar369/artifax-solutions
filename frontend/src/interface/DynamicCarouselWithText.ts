export interface DynamicCarouselWithText {
  home: {
    streamerStation: boolean | undefined | null;
    acquireSection: boolean | undefined | null;
    expertSection: boolean | undefined | null;
  };
  services: boolean | undefined | null;
  gamingRoom: {
    dive: boolean | undefined | null;
    upgrade: boolean | undefined | null;
    levelUp: boolean | undefined | null;
  }
  graphicDesign: {
    enhance: boolean | undefined | null;
    rewarding: boolean | undefined | null;
  }
}
