import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { TimerItem } from '../../models/timer-item/timer-item.interface';
import { ModeItem } from '../../models/mode-item/mode-item.interface';
import { LedItemBlue } from '../../models/led-item-Blue/led-item-Blue.interface';
import { LedItemWW } from '../../models/led-item-ww/led-item-ww.interface';
import { LedItemRed } from '../../models/led-item-red/led-item-red.interface';
import { LedItemUv } from '../../models/led-item-uv/led-item-uv.interface';
import { LedItemIr } from '../../models/led-item-ir/led-item-ir.interface';
import { FanItem } from '../../models/fan-item/fan-item.interface';
import { StateItem } from '../../models/state-item/state-item.interface';

@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html'
})
export class ConfigurationPage {
  //new object

  timerItem = {} as TimerItem
  timerItemRef$: FirebaseListObservable<TimerItem[]>

  timerListRef$: FirebaseListObservable<TimerItem[]>

  modeItem = {} as ModeItem
  modeListRef$: FirebaseListObservable<TimerItem[]>
  modeItemRef$: FirebaseListObservable<TimerItem[]>

  ledItemBlue = {} as LedItemBlue
  ledItemBlueRef$: FirebaseListObservable<LedItemBlue[]>

  ledItemRed = {} as LedItemRed
  ledItemRedRef$: FirebaseListObservable<LedItemRed[]>

  ledItemWW = {} as LedItemWW
  ledItemWWRef$: FirebaseListObservable<LedItemWW[]>

  ledItemUv = {} as LedItemUv
  ledItemUvRef$: FirebaseListObservable<LedItemUv[]>

  ledItemIr = {} as LedItemIr
  ledItemIrRef$: FirebaseListObservable<LedItemIr[]>

  FanItem = {} as FanItem
  FanItemRef$: FirebaseListObservable<FanItem[]>

  PowerRef$: FirebaseListObservable<ModeItem[]>
  StateItemRef$: FirebaseListObservable<StateItem[]>


  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {
    this.ledItemRedRef$ = this.database.list('/');
    this.ledItemBlueRef$ = this.database.list('/');
    this.ledItemWWRef$ = this.database.list('/');
    this.ledItemIrRef$ = this.database.list('/');
    this.ledItemUvRef$ = this.database.list('/');
    this.FanItemRef$ = this.database.list('/');
    this.modeItemRef$ = this.database.list('/');
    this.StateItemRef$ = this.database.list('/');
  }



  //addLedItemRed(ledItemRed: LedItemRed){
  // log the result out to the console
  //  if this.ledItemRedRef$.itemNumber == 1{
  //  this.ledItemRedRef$.update('Red',{
  //    Relays_Red: Number(this.ledItemRed.itemNumber)
  // });
  // }
  //}

  // ------------------ dinamic - modes-----------------------------------

  editModeRed(ledItemRed: LedItemRed) {
    if (this.ledItemRed.itemNumber == 0) {
      this.ledItemRedRef$.update('e0', {
        18: 0,
        23: 0,
        24: 0,
        25: 0,
        12: 0,
        16: 0,
      })
      console.log(this.ledItemRed.itemNumber)
    }
    else if (this.ledItemRed.itemNumber == 1) {
      this.ledItemRedRef$.update('e0', {
        18: 1,
        23: 0,
        24: 0,
        25: 0,
        12: 0,
        16: 0,
      })
      console.log(this.ledItemRed.itemNumber)
    }

    else if (this.ledItemRed.itemNumber == 2) {
      this.ledItemRedRef$.update('e0', {

        18: 1,
        23: 1,
        24: 0,
        25: 0,
        12: 0,
        16: 0,
      })
      console.log(this.ledItemRed.itemNumber)
    }

    else if (this.ledItemRed.itemNumber == 3) {
      this.ledItemRedRef$.update('e0', {

        18: 1,
        23: 1,
        24: 1,
        25: 0,
        12: 0,
        16: 0,
      })
      console.log(this.ledItemRed.itemNumber)
    }

    else if (this.ledItemRed.itemNumber == 4) {
      this.ledItemRedRef$.update('e0', {

        18: 1,
        23: 1,
        24: 1,
        25: 1,
        12: 0,
        16: 0,
      })
      console.log(this.ledItemRed.itemNumber)
    }
    else if (this.ledItemRed.itemNumber == 5) {
      this.ledItemRedRef$.update('e0', {

        18: 1,
        23: 1,
        24: 1,
        25: 1,
        12: 1,
        16: 0,
      })
      console.log(this.ledItemRed.itemNumber)
    }
    else if (this.ledItemRed.itemNumber == 6) {
      this.ledItemRedRef$.update('e0', {

        18: 1,
        23: 1,
        24: 1,
        25: 1,
        12: 1,
        16: 1,
      })
      console.log(this.ledItemRed.itemNumber)
    }
    this.StateItemRef$.update('state-table', {
      e0: 1
    })
  }

  editModeBlue(ledItemBlue: LedItemBlue) {
    var number = this.ledItemBlueRef$;
    if (this.ledItemBlue.itemNumber == 0) {
      this.ledItemBlueRef$.update('e1', {
        17: 0,
        27: 0,
        22: 0,
        5: 0,
      })
      console.log(this.ledItemBlue.itemNumber)
    }
    else if (this.ledItemBlue.itemNumber == 1) {
      this.ledItemBlueRef$.update('e1', {
        17: 1,
        27: 0,
        22: 0,
        5: 0,
      })
      console.log(this.ledItemBlue.itemNumber)
    }
    else if (this.ledItemBlue.itemNumber == 2) {
      this.ledItemBlueRef$.update('e1', {
        17: 1,
        27: 1,
        22: 0,
        5: 0,
      })
      console.log(this.ledItemBlue.itemNumber)
    }
    else if (this.ledItemBlue.itemNumber == 3) {
      this.ledItemBlueRef$.update('e1', {
        17: 1,
        27: 1,
        22: 1,
        5: 0,
      })
      console.log(this.ledItemBlue.itemNumber)
    }
    else if (this.ledItemBlue.itemNumber == 4) {
      this.ledItemBlueRef$.update('e1', {
        17: 1,
        27: 1,
        22: 1,
        5: 1,
      })
      console.log(this.ledItemBlue.itemNumber)
    }
    this.StateItemRef$.update('state-table', {
      e1: 1
    })
  }

  editModeWW(ledItemWW: LedItemWW) {
    if (this.ledItemWW.itemNumber == 0) {
      this.ledItemWWRef$.update('e2', {
        20: 0,
        21: 0,
      })
      console.log(this.ledItemWW.itemNumber)
    }
    else if (this.ledItemWW.itemNumber == 1) {
      this.ledItemWWRef$.update('e2', {
        20: 1,
        21: 0,
      })
      console.log(this.ledItemWW.itemNumber)
    }

    else if (this.ledItemWW.itemNumber == 2) {
      this.ledItemWWRef$.update('e2', {
        20: 1,
        21: 1,
      })
      console.log(this.ledItemWW.itemNumber)
    }
    this.StateItemRef$.update('state-table', {
      e2: 1
    })
  }

  editModeIr(ledItemIr: LedItemIr) {
    if (this.ledItemIr.itemNumber == 0) {
      this.ledItemIrRef$.update('e3', {
        6: 0,
      })
    }
    else if (this.ledItemIr.itemNumber == 0) {
      this.ledItemIrRef$.update('e3', {
        6: 1,
      })
    }
  }

  editModeUv(ledItemUv: LedItemUv) {
    if (this.ledItemUv.itemNumber == true) {
      this.ledItemUvRef$.update('e4', {
        13: 0,
      })
    }
    else if (this.ledItemUv.itemNumber == false) {
      this.ledItemUvRef$.update('e4', {
        13: 1,
      })
    }
    this.StateItemRef$.update('state-table', {
      e3: 1
    })
  }

  editModeBloom(LedItemRed: LedItemRed) {
    this.ledItemBlueRef$.update('1', {
      17: 1,
      27: 1,
      22: 1,
      5: 1,
    })
    this.ledItemRedRef$.update('0', {
      18: 1,
      23: 1,
      24: 1,
      25: 1,
      12: 1,
      16: 1,
    })
    this.ledItemWWRef$.update('2', {
      20: 1,
      21: 1,
    })
    this.StateItemRef$.update('state-table', {
      0: 1,
      1: 1,
      2: 1,
      3: 0,
      4: 0,
      5: 0,
    })

  }

  // ------------------ static - modes-----------------------------------

  editModeClone(modeItem: ModeItem) {
    // log the result out to the console
    this.modeListRef$.update('actual_mode', {
      mode: 'clone',
      Relays_blue: 2,
      Relays_red: 0,
      Relays_ww: 1
    });
  }

  editModeVegeta(LedItemBlue: LedItemBlue) {
    this.ledItemBlueRef$.update('1', {
      17: 1,
      27: 1,
      22: 0,
      5: 0,
    })
    this.StateItemRef$.update('state-table', {
      0: 0,
      1: 1,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    })
  }

  editModeFlowering() {
    this.ledItemBlueRef$.update('1', {
      17: 0,
      27: 0,
      22: 1,
      5: 1,
    })
    this.ledItemRedRef$.update('0', {
      18: 1,
      23: 1,
      24: 1,
      25: 1,
      12: 1,
      16: 1,
    })
    this.StateItemRef$.update('state-table', {
      0: 1,
      1: 1,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    })
  }

  PowerOff(modeItem: ModeItem) {
    this.ledItemRedRef$.update('e0', {
      18: 0,
      23: 0,
      24: 0,
      25: 0,
      12: 0,
      16: 0,
    })

    this.ledItemBlueRef$.update('e1', {
      17: 0,
      27: 0,
      22: 0,
      5: 0,
    })

    this.ledItemWWRef$.update('e2', {
      20: 0,
      21: 0,
    })

    this.FanItemRef$.update('e3', {
      6: 0,
    })

    this.FanItemRef$.update('e4', {
    13: 0,
    })
    this.StateItemRef$.update('state-table', {
      e3:0})
  }


  PowerOn(modeItem: ModeItem) {
    // log the result out to the console
    this.modeListRef$.update('actual_mode', {
      mode: 'bloom',
      Relays_blue: 2,
      Relays_red: 2,
      Relays_ww: 2
    });
  }

  Fan1On(modeItem: ModeItem) {
    this.FanItemRef$.update('e5', {
      19: 1,
    })
    this.StateItemRef$.update('state-table', {
      e5: 1
    })
  }

  Fan2On(modeItem: ModeItem) {
    this.FanItemRef$.update('e5', {
      26: 1,
    })
    this.StateItemRef$.update('state-table', { e5: 1 })
  }

  Fan1Off(modeItem: ModeItem) {
    this.FanItemRef$.update('e5', { 19: 0 })
    this.StateItemRef$.update('state-table', { e5: 1 })
  }

  Fan2Off(modeItem: ModeItem) {
    this.FanItemRef$.update('e5', { 26: 0 })
    this.StateItemRef$.update('state-table', { e5: 1 })
  }

}