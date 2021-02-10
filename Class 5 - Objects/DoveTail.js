const _edge_over_cut = new WeakMap();
const _dovetail_count = new WeakMap();
const _material_width = new WeakMap(); 
const _material_thickness = new WeakMap();
const _dovetail_angle = new WeakMap();
const _end_mill_diameter = new WeakMap();
const _dovetail_mill_diameter = new WeakMap();


//Public Interface
class Dovetail {
    constructor(
        in_or_mm = 1, //in = 1
        material_width, // Defines the width of the stock into which you will be cutting dovetails (ideally, use calipers to take this measurement).
        material_thickness = .5, //Defines the thickness of the stock into which you will be cutting dovetails (ideally, use calipers to take this measurement). This parameter must match the final depth of cut on Origin, so if you plan to overshoot to make your joint a bit proud, add that amount here as well.
        dovetail_angle, //Defines the taper angle of your dovetail mill.
        dovetail_count, //Defines The number of tails in your design (must be an odd number)
        end_mill_diameter, //Defines the diameter of the end mill you will use to cut the pins (used to size the front and back "over-cut" correctly).
        dovetail_mill_generator, //Defines the diameter of the dovetail mill you will use to cut the tails (used to size the front and back "over-cut" correctly).
        edge_over_cut //Defines the amount of "over-cut" beyond the edge of your material on the left and right sides. The default is 0.5".
        ) {
            _material_width.set(this,material_width); //
            _material_thickness.set(this,material_thickness);
            _dovetail_angle.set(this,dovetail_angle);
            _dovetail_count.set(this,dovetail_count);
            _end_mill_diameter.set(this,end_mill_diameter);
            _dovetail_mill_diameter.set(this,dovetail_mill_generator),
            _edge_over_cut.set(this,edge_over_cut);
            console.log('Dovetail Constructor executed');
        }

        get dovetail_count() {
            return _dovetail_count.get(this);
        }
        
        set dovetail_count(value) {
            //must be an odd number
            if(value % 2){ //true
                _dovetail_count.set(this, value);
            }
        }
         
    }

    module.exports = Dovetail;