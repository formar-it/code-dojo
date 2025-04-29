import { User } from "../entities/user.js";

export interface SyncService {
  sync(user: User): Promise<void>;
}
