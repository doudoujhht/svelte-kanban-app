import {writable} from "svelte/store";

import * as data from "../data.json"

export const boards = writable(data.boards);
export const actif = writable(data.boards[0]);
export let isLightMode = writable(true)