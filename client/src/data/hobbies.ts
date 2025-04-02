export interface Hobby {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const hobbies: Hobby[] = [
  {
    title: "Photography",
    description: "I enjoy capturing moments through photography, especially landscapes and street scenes.",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: "ri-camera-fill"
  },
  {
    title: "Chess",
    description: "I'm an avid chess player, always looking to improve my strategic thinking.",
    image: "https://images.unsplash.com/photo-1507227947813-1bb4fa567798?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: "ri-gamepad-fill"
  },
  {
    title: "Hiking",
    description: "Exploring trails and being surrounded by nature helps me disconnect and recharge.",
    image: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: "ri-footprint-fill"
  },
  {
    title: "Reading",
    description: "I love science fiction and non-fiction books about technology and psychology.",
    image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    icon: "ri-book-open-fill"
  }
];
