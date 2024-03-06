'use client';
import Button from '@/app/components/Button';
import Text from '@/app/components/Text';
import Image from 'next/image';
import speaker_img_not_found from '@/assets/images/speaker.png';
import Card from '@/app/components/Card';
import Link from 'next/link';
import Filters from '@/app/components/Filters';
import { creativeDaysFilters } from '@/app/utils/filters';
import { useSearchParams } from 'next/navigation';

const ProgramView = () => {
	const param = useSearchParams();
	const type = param.get('type');
	const header = 'CREATIVE SELFDIRECT ION';
	const date = 'DONNERSTAG, 8. JUNI, 13 – 16 UHR';
	const info = `Schärfe dein berufliches Profil und entwickle deinen persönlichen Führungsstil im Workshop «Creative Selfdirection» von Pascal Geissbühler, Markenberater und Gründer von biographis.ch.
    Du arbeitest in einer Seniorposition in der Kreation und willst deine Karriere auf das nächste Level bringen? Dann melde dich an bei ADC forward – dem massgeschneiderten Leadership-Programm für (bis zu) 20 weibliche High-Potentials.`;

	const speakerName = 'PASCAL GEISSBÜHLER';
	const speakerInfo =
		'Brand Strategist, Creative Coach und Organisationsentwickler, Gründer und Inhaber von Biographis';
	const speakerMoreInfo = `Profil schärfen und Positionierung stärken – Pascal Geissbühler zeigt, wie es geht. Als Markenberater, 
    Coach und Geschäftsführer von Biographis verhilft er nicht nur Unternehmen zu einer eigenständigen Identität und einer 
    schlagkräftigen Brand Strategy, sondern auch Einzelpersonen. In seinem Personal Coaching führt er Menschen auf den Weg zu einem 
    erfüllten Berufsleben und unterstützt sie bei der Karriereentwicklung, dem Personal Branding und dem persönlichen Auftreten. Dabei 
    greift Pascal Geissbühler auf seine umfangreiche Erfahrung aus seinem eigenen Weg zurück: Er war in der Geschäftsleitung einer 
    Brand Consultancy tätig, leitete Strategie- und Kreativteams in Change-Projekten und arbeitete als Texter-Konzepter und
    Medienjournalist. Nebenbei gibt er sein Wissen auch als Trainer und Dozent an der ETH Zürich, der ZHdK und an der Kalaidos
    Hochschule weiter. Ein spannendes Berufsprofil!`;

	const cardInfo = `ADC forward findet erstmalig während der ADC Creative Days 2023 im Schloss Sihlberg statt.

    Für nur 195 CHF (3-Tagespass) bekommst du Zugang zu diesem und allen anderen Workshops, interessanten Talks, der ADC Award Ceremony und Partynacht.
    
    Teilnahme nur nach Anmeldung und mit dem Festivalpass, der vom 8. bis 10. Juni 2023 Zugang zu allen Talks und Events im Schloss Sihlberg gewährt.
    
    Die Platzzahl am Workshop ist limitiert: First come, first served.`;

	return (
		<div className='pt-[100px] max-md:p-5 flex flex-col gap-y-[100px]'>
			<div className='flex justify-start items-center pl-[30px]'>
				<Filters filters={creativeDaysFilters} activeFilter={type} />
			</div>
			<div className='flex p-[30px] gap-[102px]'>
				<div className='max-sm:text-left pl-[103px] flex flex-col gap-y-8'>
					<Text twClassName='text-[120px] max-md:text-[55px] max-sm:text-[30px] leading-[120px]'>
						{header}
					</Text>
					<Text>{date}</Text>
					<p>{info}</p>
					<Button primaryBtn={true} bgColor={'#000000'} width={187}>
						Jetzt anmelden
					</Button>
				</div>
				<div className='flex flex-col justify-between gap-8 w-[382px] flex-shrink-0'>
					<Image
						src={speaker_img_not_found}
						alt='Speaker'
						className='w-full h-[382px]'
					/>
					<Text fontSize={24} twClassName='leading-tight font-medium'>
						{speakerName}
					</Text>
					<Text
						capitalize={true}
						fontSize={16}
						twClassName={'font-medium'}>
						{speakerInfo}
					</Text>
					<p className='text-[15px]'>{speakerMoreInfo}</p>
					<div className='flex gap-3 text-[12px] pt-3'>
						<Link href='#'>{'LinkedIn'.toUpperCase()}</Link>
						<Link href='#'>{'website'.toUpperCase()}</Link>
						<Link href='#'>{'Instagram'.toUpperCase()}</Link>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center gap-[100px]'>
				<Text>ALLE SPEAKERS</Text>
				<div className='grid grid-cols-3 max-sm:grid-cols-1 gap-x-[155px] gap-y-[100px] max-md:gap-14'>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
					<Card
						imageCard={true}
						className='w-[308px] max-md:w-[200px]'
						name={'Pascal geissbühler'}
						title={'«Playful Exploration in Midjourney»'}
						description={'Donnerstag, 8. Juni // 15 – 17 UHR'}
						titleStyle={{ fontSize: 24 }}
						descriptionStyle={{ fontSize: 12 }}
					/>
				</div>
			</div>
			<div className='bg-[#EAEAEA] rounded-3xl p-10 flex flex-col gap-5 w-[752px] max-md:w-full self-center mb-[100px]'>
				<Text>ADC Forward</Text>
				<Text fontSize={15} capitalize={true}>
					{cardInfo}
				</Text>
				<Button
					primaryBtn={true}
					bgColor={'#000000'}
					width={150}
					style={{ fontSize: '12px' }}>
					ZUR HOTEL WEBSITE
				</Button>
			</div>
		</div>
	);
};

export default ProgramView;
