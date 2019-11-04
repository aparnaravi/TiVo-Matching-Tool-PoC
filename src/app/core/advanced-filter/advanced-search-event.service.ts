import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class AdvancedSearchEventService {

    public advSearchfilterChanged$ = new EventEmitter();
    public savedSearchfilterChanged$ = new EventEmitter();
    constructor() {
        this.advSearchfilterChanged$ = new EventEmitter();
        this.savedSearchfilterChanged$ = new EventEmitter();

    }
    updateAdvancedSearchFilter(filterToRemove) {
        this.advSearchfilterChanged$.emit(filterToRemove);
    }
    updateSideNavFilter(flag)
    {
        this.advSearchfilterChanged$.emit(flag);
    }
    updateSavedSearchFilter(filterToRemove){
        this.savedSearchfilterChanged$.emit(filterToRemove);
    }
}