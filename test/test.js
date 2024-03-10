import {should} from "chai";
import { User } from "../src/lib/User.js";
import { getHealthEvents } from "../src/lib/HealthEventStore.js";
should();

const events = await getHealthEvents(1);
events.should.have.length(1);
