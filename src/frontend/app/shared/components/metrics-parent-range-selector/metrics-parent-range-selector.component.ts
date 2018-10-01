import { Component, OnInit, QueryList, ViewChildren, AfterViewInit, AfterContentInit, ContentChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { EntityMonitorFactory } from '../../monitors/entity-monitor.factory.service';
import { MetricsRangeSelectorManagerService } from '../../services/metrics-range-selector-manager.service';
import { MetricsChartComponent } from '../metrics-chart/metrics-chart.component';
import { MetricQueryType } from '../../services/metrics-range-selector.types';
import { metricSchemaKey, entityFactory } from '../../../store/helpers/entity-factory';
import { IMetrics } from '../../../store/types/base-metric.types';

@Component({
  selector: 'app-metrics-parent-range-selector',
  templateUrl: './metrics-parent-range-selector.component.html',
  styleUrls: ['./metrics-parent-range-selector.component.scss'],
  providers: [
    MetricsRangeSelectorManagerService
  ]
})
export class MetricsParentRangeSelectorComponent implements OnInit, AfterContentInit {
  private actionSub: Subscription;

  @ContentChildren(MetricsChartComponent)
  private metricsCharts: QueryList<MetricsChartComponent>;

  public rangeTypes = MetricQueryType;

  constructor(
    private entityMonitorFactory: EntityMonitorFactory,
    public rangeSelectorManager: MetricsRangeSelectorManagerService
  ) { }

  ngAfterContentInit() {
    const action = this.metricsCharts.first.metricsConfig.metricsAction;
    const metricsMonitor = this.entityMonitorFactory.create<IMetrics>(
      action.metricId,
      metricSchemaKey,
      entityFactory(metricSchemaKey)
    );
    this.rangeSelectorManager.init(metricsMonitor, action);
    this.actionSub = this.rangeSelectorManager.metricsAction$.subscribe(newAction => {
      if (newAction) {
        this.metricsCharts.forEach(chart => {
          const oldAction = chart.metricsConfig.metricsAction;
          chart.metricsAction = {
            ...oldAction,
            query: {
              ...oldAction.query,
              params: newAction.query.params
            },
            queryType: newAction.queryType
          };
        });
      }
    });
  }


  ngOnInit() {
  }

}