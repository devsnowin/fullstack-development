import prisma from 'db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		user: await prisma.user.findMany({
			include: {
				items: true,
			},
		}),
	};
}) satisfies PageServerLoad;
