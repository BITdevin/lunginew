
import React from 'react';
import FadeInSection from './FadeInSection';
import { FoodIcon, CarIcon } from './icons/Icons';

const Business: React.FC = () => {
    return (
        <section id="business" className="py-20 md:py-32 bg-base dark:bg-dark-bg">
            <div className="container mx-auto px-6">
                <FadeInSection>
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6">A Taste of <span className="text-accent">Success</span></h2>
                        <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-text dark:text-dark-text/80 leading-relaxed">
                            Beyond the airwaves, Lungile is an entrepreneur creating vibrant community hubs in Mataffin, right behind the Mbombela stadium next to the VIP gate.
                        </p>
                    </div>
                </FadeInSection>
                <div className="grid md:grid-cols-2 gap-10">
                    
                    {/* L Mango Kitchen Card */}
                    <FadeInSection>
                        <div className="bg-white dark:bg-charcoal rounded-lg shadow-2xl overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300 h-full">
                            <img src="/public/media/food.jpg" alt="Delicious plate of rice and fish from L Mango Kitchen" className="w-full h-64 object-cover" loading="lazy" />
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <FoodIcon />
                                    <h3 className="text-3xl font-bold text-charcoal dark:text-white">L Mango Kitchen</h3>
                                </div>
                                <p className="text-gray-text dark:text-dark-text/80 mb-4 flex-grow">
                                    Serving up soulful and delicious traditional meals. It's more than food; it's an experience.
                                </p>
                                <ul className="space-y-2 text-charcoal dark:text-dark-text/90">
                                    <li className="font-semibold">Redfish with Pap, Rice, Mash or Dumpling</li>
                                    <li className="font-semibold">Hearty Goat Stew</li>
                                    <li className="font-semibold">Flavorful Chicken Stew</li>
                                </ul>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Exclusive Car Wash Card */}
                    <FadeInSection delay={200}>
                        <div className="bg-white dark:bg-charcoal rounded-lg shadow-2xl overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300 h-full">
                            <img src="/public/media/Car.jpg" alt="A freshly washed car at Exclusive Car Wash" className="w-full h-64 object-cover" loading="lazy" />
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <CarIcon />
                                    <h3 className="text-3xl font-bold text-charcoal dark:text-white">Exclusive Car Wash</h3>
                                </div>
                                <p className="text-gray-text dark:text-dark-text/80 flex-grow">
                                    Get your car looking its best while you relax and enjoy the atmosphere. Every Sunday is a vibe, with great music and even better company as Lungile often takes to the decks to play for the crowd.
                                </p>
                            </div>
                        </div>
                    </FadeInSection>

                </div>
            </div>
        </section>
    );
};

export default Business;