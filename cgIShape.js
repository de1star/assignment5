class cgIShape {
    constructor () {
        this.points = [];
        this.bary = [];
        this.indices = [];
    }
    
    addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {
        var nverts = this.points.length / 4;
        
        // push first vertex
        this.points.push(x0);  this.bary.push (1.0);
        this.points.push(y0);  this.bary.push (0.0);
        this.points.push(z0);  this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
        
        // push second vertex
        this.points.push(x1); this.bary.push (0.0);
        this.points.push(y1); this.bary.push (1.0);
        this.points.push(z1); this.bary.push (0.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++
        
        // push third vertex
        this.points.push(x2); this.bary.push (0.0);
        this.points.push(y2); this.bary.push (0.0);
        this.points.push(z2); this.bary.push (1.0);
        this.points.push(1.0);
        this.indices.push(nverts);
        nverts++;
    }
}

class Cube extends cgIShape {
    
    constructor (subdivisions) {
        super();
        this.makeCube (subdivisions);
    }
    
    makeCube (subdivisions)  {
        
        // fill in your cube code here.
        var origins = [
        [0, 0, 0.5],
        [0, 0, -0.5],
        [0, 0.5, 0],
        [0, -0.5, 0],
        [0.5, 0, 0],
        [-0.5, 0, 0]
        ];
        var x0, y0, z0, x1, y1, z1, x2, y2, z2;
        var side_len = 1 / subdivisions;
        var origin;
        for(var n=0; n<6; n++){
            if(origins[n][0] != 0){
                x0 = origins[n][0];
                x1 = origins[n][0];
                x2 = origins[n][0];
                y0 = -0.5;
                z0 = -0.5;
                y1 = -0.5;
                z1 = -0.5;
                y2 = -0.5;
                z2 = -0.5;
                for(var i=0; i<subdivisions; i++){
                    y1 += side_len;
                    for(var j=0; j<subdivisions; j++){
                        z2 += side_len;
                        this.addTriangle(x0, y0, z0, x1, y1, z1, x2, y2, z2);
                        this.addTriangle(x0, y0, z0, x2, y2, z2, x1, y1, z1);
                        this.addTriangle(x0, y1, z2, x2, y2, z2, x1, y1, z1);
                        this.addTriangle(x0, y1, z2, x1, y1, z1, x2, y2, z2);
                        z0 += side_len;
                        z1 = z0;
                    }
                    z1 = -0.5;
                    z0 = z1;
                    z2 = -0.5;
                    y0 += side_len;
                    y2 = y0;
                }
            }
            if(origins[n][1] != 0){
                y0 = origins[n][1];
                y1 = origins[n][1];
                y2 = origins[n][1];
                x0 = -0.5;
                z0 = -0.5;
                x1 = -0.5;
                z1 = -0.5;
                x2 = -0.5;
                z2 = -0.5;
                for(var i=0; i<subdivisions; i++){
                    x1 += side_len;
                    for(var j=0; j<subdivisions; j++){
                        z2 += side_len;
                        this.addTriangle(x0, y0, z0, x1, y1, z1, x2, y2, z2);
                        this.addTriangle(x0, y0, z0, x2, y2, z2, x1, y1, z1);
                        this.addTriangle(x1, y0, z2, x2, y2, z2, x1, y1, z1);
                        this.addTriangle(x1, y0, z2, x1, y1, z1, x2, y2, z2);
                        z0 += side_len;
                        z1 = z0;
                    }
                    z1 = -0.5;
                    z0 = z1;
                    z2 = -0.5;
                    x0 += side_len;
                    x2 = x0;
                }
            }
            if(origins[n][2] != 0){
                z0 = origins[n][2];
                z1 = origins[n][2];
                z2 = origins[n][2];
                y0 = -0.5;
                x0 = -0.5;
                y1 = -0.5;
                x1 = -0.5;
                y2 = -0.5;
                x2 = -0.5;
                for(var i=0; i<subdivisions; i++){
                    y1 += side_len;
                    for(var j=0; j<subdivisions; j++){
                        x2 += side_len;
                        this.addTriangle(x0, y0, z0, x1, y1, z1, x2, y2, z2);
                        this.addTriangle(x0, y0, z0, x2, y2, z2, x1, y1, z1);
                        this.addTriangle(x2, y1, z0, x2, y2, z2, x1, y1, z1);
                        this.addTriangle(x2, y1, z0, x1, y1, z1, x2, y2, z2);
                        x0 += side_len;
                        x1 = x0;
                    }
                    x1 = -0.5;
                    x0 = x1;
                    x2 = -0.5;
                    y0 += side_len;
                    y2 = y0;
                }
            }
        }
    }
}


class Cylinder extends cgIShape {

    constructor (radialdivision,heightdivision) {
        super();
        this.makeCylinder (radialdivision,heightdivision);
    }
    
    makeCylinder (radialdivision,heightdivision){
        // fill in your cylinder code here
        var seq_angle = 360 / radialdivision;
    var x0, y0, z0, x1, y1, z1, x2, y2, z2;
    x0 = 0;
    z0 = 0;
    x1 = 0.5;
    z1 = 0;
    var nodes = []
    for(var i=1; i<=radialdivision; i++){
        var radian = radians(seq_angle * i)
        nodes.push([x1, z1])
        x2 = 0.5 * Math.cos(radian);
        z2 = 0.5 * Math.sin(radian);
        this.addTriangle(x0, 0.5, z0, x1, 0.5, z1, x2, 0.5, z2);
        this.addTriangle(x0, 0.5, z0, x2, 0.5, z2, x1, 0.5, z1);
        this.addTriangle(x0, -0.5, z0, x1, -0.5, z1, x2, -0.5, z2);
        this.addTriangle(x0, -0.5, z0, x2, -0.5, z2, x1, -0.5, z1);
        x1 = x2;
        z1 = z2;
    }
    seq_len = 1 / heightdivision;
    var xa, za, xb, zb;
    for(var n=0; n<radialdivision; n++){
        if(n==0){
            xa = nodes[radialdivision-1][0];
            za = nodes[radialdivision-1][1];
            xb = nodes[0][0];
            zb = nodes[0][1];
        }else{
            xa = nodes[n-1][0]
            za = nodes[n-1][1]
            xb = nodes[n][0]
            zb = nodes[n][1]
        }
        x0 = xa;
        y0 = -0.5;
        z0 = za;
        x1 = xb;
        y1 = -0.5;
        z1 = zb;
        x2 = xa;
        y2 = -0.5;
        z2 = za;
        for(var i=0; i<heightdivision; i++){
            y2 += seq_len;
            this.addTriangle(x0, y0, z0, x1, y1, z1, x2, y2, z2);
            this.addTriangle(x1, y2, z1, x2, y2, z2, x1, y1, z1);
            y0 += seq_len;
            y1 += seq_len;
        }
    }
    }
}

class Cone extends cgIShape {

    constructor (radialdivision, heightdivision) {
        super();
        this.makeCone (radialdivision, heightdivision);
    }
    
    
    makeCone (radialdivision, heightdivision) {
    
        // Fill in your cone code here.
        var seq_angle = 360 / radialdivision;
        var x0, y0, z0, x1, y1, z1, x2, y2, z2;
        x0 = 0;
        z0 = 0;
        x1 = 0.5;
        z1 = 0;
        var nodes = []
        for(var i=1; i<=radialdivision; i++){
            var radian = radians(seq_angle * i)
            nodes.push([x1, z1])
            x2 = 0.5 * Math.cos(radian);
            z2 = 0.5 * Math.sin(radian);
            this.addTriangle(x0, -0.5, z0, x1, -0.5, z1, x2, -0.5, z2);
            this.addTriangle(x0, -0.5, z0, x2, -0.5, z2, x1, -0.5, z1);
            x1 = x2;
            z1 = z2;
        }
        var Xa, Ya, Za, Xb, Yb, Zb, Xc, Yc, Zc, param, new_x1, new_y1, new_z1;
        Xc = 0;
        Yc = 0.5;
        Zc = 0;
        Ya = -0.5;
        Yb = -0.5;
        for(var n=0; n<radialdivision; n++){
            if(n==0){
                Xa = nodes[radialdivision-1][0];
                Za = nodes[radialdivision-1][1];
                Xb = nodes[0][0];
                Zb = nodes[0][1];
            }else{
                Xa = nodes[n-1][0]
                Za = nodes[n-1][1]
                Xb = nodes[n][0]
                Zb = nodes[n][1]
            }
            x0 = Xa;
            y0 = Ya;
            z0 = Za;
            x1 = Xb;
            y1 = Yb;
            z1 = Zb;
            for(var i=0; i<heightdivision; i++){
                param = (i+1)/heightdivision;
                x2 = param*Xa + (1-param)*Xc;
                y2 = param*Ya + (1-param)*Yc;
                z2 = param*Za + (1-param)*Zc;
                this.addTriangle(x0, y0, z0, x1, y1, z1, x2, y2, z2);
                this.addTriangle(x0, y0, z0, x2, y2, z2, x1, y1, z1);
                new_x1 = (1-param)*Xb + param*Xc;
                new_y1 = (1-param)*Yb + param*Yc;
                new_z1 = (1-param)*Zb + param*Zc;
                this.addTriangle(new_x1, new_y1, new_z1, x1, y1, z1, x2, y2, z2);
                this.addTriangle(new_x1, new_y1, new_z1, x2, y2, z2, x1, y1, z1);
                x0 = x2;
                y0 = y2;
                z0 = z2;
                x1 = new_x1;
                y1 = new_y1;
                z1 = new_z1;
            }
        }
    }
}
    
class Sphere extends cgIShape {

    constructor (slices, stacks) {
        super();
        this.makeSphere (slices, stacks);
    }
    
    makeSphere (slices, stacks) {
        // fill in your sphere code here
    }

}


function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

